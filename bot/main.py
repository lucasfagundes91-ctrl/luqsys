"""
main.py
=======
FastAPI + Twilio webhook para o bot de comparação de orçamentos.
Deploy: Railway (Python, porta via $PORT)
"""

import os
from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
from twilio.rest import Client as TwilioClient
from twilio.request_validator import RequestValidator

import database as db
import comparador_orcamentos as bot

app = FastAPI(title="ComparaBot — Luqsys")

twilio       = TwilioClient(os.environ["TWILIO_ACCOUNT_SID"], os.environ["TWILIO_AUTH_TOKEN"])
NUMERO_FROM  = os.environ["TWILIO_WHATSAPP_NUMBER"]
_validador   = RequestValidator(os.environ["TWILIO_AUTH_TOKEN"])


def _url_publica(request: Request) -> str:
    """URL que a Twilio usou pra assinar. Atrás do proxy do Railway o request
    chega como http:// enquanto a assinatura foi feita sobre https://, então o
    esquema e o host vêm dos cabeçalhos X-Forwarded-*; usar request.url cru faz
    toda assinatura falhar."""
    proto = request.headers.get("x-forwarded-proto", request.url.scheme).split(",")[0].strip()
    host  = request.headers.get("x-forwarded-host", request.headers.get("host", "")).split(",")[0].strip()
    url = request.url.replace(scheme=proto, netloc=host) if host else request.url
    return str(url)


@app.on_event("startup")
def startup():
    db.init_db()
    print("✅ DB inicializado")


@app.get("/")
def health():
    return {"status": "ok", "app": "ComparaBot", "by": "Luqsys", "site": "https://luqsys.com.br/comparabot"}


@app.post("/webhook/whatsapp")
async def webhook(request: Request):
    form       = await request.form()
    # Sem validar a assinatura, o campo From é forjável: qualquer um faz o bot
    # responder por Twilio pra um número escolhido e queima a cota da Anthropic.
    assinatura = request.headers.get("x-twilio-signature", "")
    if not _validador.validate(_url_publica(request), dict(form), assinatura):
        return JSONResponse(status_code=403, content={"error": "assinatura inválida"})
    phone      = form.get("From", "")
    body       = form.get("Body", "")
    num_media  = int(form.get("NumMedia", 0))
    media_url  = form.get("MediaUrl0")  if num_media > 0 else None
    media_type = form.get("MediaContentType0") if num_media > 0 else None

    resposta = bot.handle(
        phone=phone,
        body=body,
        media_url=media_url,
        media_type=media_type,
        num_media=num_media,
    )

    if resposta:
        _enviar(phone, resposta)

    return Response(content="<Response/>", media_type="text/xml")


@app.post("/admin/ativar-pago")
async def ativar_pago(request: Request):
    data   = await request.json()
    secret = os.environ.get("ADMIN_SECRET", "")
    if not secret or data.get("secret") != secret:
        return JSONResponse(status_code=403, content={"error": "não autorizado"})

    phone = data.get("phone", "").replace("whatsapp:", "").strip()
    if not phone:
        return JSONResponse(status_code=400, content={"error": "phone obrigatório"})

    db.ativar_plano_pago(phone)
    return {"ok": True, "phone": phone, "plano": "pago"}


def _enviar(to: str, msg: str):
    if not to.startswith("whatsapp:"):
        to = f"whatsapp:{to}"
    for bloco in _dividir(msg, 1500):
        twilio.messages.create(from_=NUMERO_FROM, to=to, body=bloco)


def _dividir(texto: str, limite: int) -> list[str]:
    if len(texto) <= limite:
        return [texto]
    blocos, atual = [], ""
    for linha in texto.split("\n"):
        if len(atual) + len(linha) + 1 > limite:
            blocos.append(atual.strip())
            atual = linha
        else:
            atual += ("\n" if atual else "") + linha
    if atual:
        blocos.append(atual.strip())
    return blocos
