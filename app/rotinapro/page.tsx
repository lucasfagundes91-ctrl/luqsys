import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "RotinaPro — Checklists e rotinas operacionais multi-unidade",
  description:
    "Padronize abertura, fechamento, manutenção e auditoria das suas unidades. Inspetor preenche pelo WhatsApp, foto vai direto pro banco de fotos e KPIs aparecem em tempo real.",
};

export default function RotinaProPage() {
  return (
    <ProductLayout
      icone="📋"
      nome="RotinaPro"
      tagline="Toda rotina operacional no controle"
      descricao={
        <>
          Pra <strong className="text-white">empresas multi-unidade</strong>:
          checklists customizáveis, inspetor preenche pelo WhatsApp,
          banco de fotos e KPI por unidade. Substitui planilha, prancheta
          e grupo no zap.
        </>
      }
      ctaPrimaria={{
        label: "Falar com a gente",
        href: "https://wa.me/5545991077788?text=Quero%20conhecer%20o%20RotinaPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra unidades + modelos",
          texto:
            "Lojas, filiais, restaurantes, condomínios, obras. Crie checklists com perguntas Sim/Não, nota 0-10, texto ou foto — peso por item pra calcular KPI.",
        },
        {
          n: "2",
          titulo: "Inspetor preenche pelo WhatsApp",
          texto:
            "Envia link de capability pro celular do inspetor — ele preenche sem login, foto vai direto pro banco, foto/observação ficam anexadas ao item.",
        },
        {
          n: "3",
          titulo: "KPIs e alerta automático",
          texto:
            "Ranking de unidades por conformidade, gráfico de evolução, alerta WhatsApp quando taxa cai do limite. Dono e responsável da unidade são notificados.",
        },
      ]}
      features={[
        "Modelos customizáveis com peso por item",
        "Tipos: Sim/Não, nota 0-10, texto, foto obrigatória",
        "Inspetor preenche via WhatsApp (sem precisar conta)",
        "Banco de fotos pesquisável por unidade/modelo/período",
        "KPI por unidade + ranking automático",
        "Alerta WhatsApp quando conformidade < limite",
        "Agendamento recorrente (diário/semanal/mensal)",
        "Multi-tenant com RLS — equipe de inspetores",
      ]}
      planos={[
        {
          nome: "Pro",
          publico: "Até 10 unidades, checklists ilimitados",
          precoLabel: "R$ 49",
          features: [
            "Até 10 unidades",
            "Modelos e execuções ilimitados",
            "Banco de fotos 5GB",
            "WhatsApp pra inspetores",
            "KPIs + ranking automático",
            "Alertas de conformidade",
            "Suporte por e-mail e WhatsApp",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/fmai51owfhde8ckw",
          destaque: true,
        },
        {
          nome: "Empresa",
          publico: "Várias filiais ou franquia",
          precoLabel: "R$ 149",
          features: [
            "Unidades ilimitadas",
            "Banco de fotos 50GB",
            "Sub-usuários com perfis",
            "Grupos consolidados (multi-CNPJ)",
            "Relatórios PDF mensais",
            "Onboarding dedicado",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref:
            "mailto:contato@luqsys.com.br?subject=Quero%20o%20RotinaPro%20Empresa",
        },
      ]}
      ctaFinalTitulo="Pare de gerenciar checklist por planilha e grupo de WhatsApp"
      ctaFinalTexto="Cadastre 1 unidade e teste 3 dias grátis. Sem cartão."
      appUrl="https://rotinapro.luqsys.com.br"
      assinarUrl="https://www.asaas.com/c/fmai51owfhde8ckw"
    />
  );
}
