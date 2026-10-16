#!/bin/bash
# Gera public/guias/<slug>.pdf a partir de guias-src/<slug>/guia.html.
# Uso: guias-src/gerar.sh <slug>   (rodar da raiz do repo luqsys)
set -e
slug="$1"; [ -n "$slug" ] || { echo "uso: $0 <slug>"; exit 1; }
raiz="$(cd "$(dirname "$0")/.." && pwd)"
src="$raiz/guias-src/$slug/guia.html"; out="$raiz/public/guias/$slug.pdf"
[ -f "$src" ] || { echo "falta $src"; exit 1; }
CHROME="${CHROME:-$HOME/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome}"
LD_LIBRARY_PATH="${LD_LIBRARY_PATH:-$HOME/chromium-libs/root/usr/lib/x86_64-linux-gnu}" \
  "$CHROME" --headless=new --no-sandbox --no-pdf-header-footer --print-to-pdf="$out" "file://$src" 2>/dev/null
pdfinfo "$out" | grep -E "^Pages"
