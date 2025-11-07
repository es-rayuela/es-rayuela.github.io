#!/bin/bash

# Script para converter imagens para WebP e otimizar o site
# Execute com: bash convert-images.sh

echo "🖼️  Iniciando conversão de imagens para WebP..."

# Verificar se sharp-cli está instalado
if ! command -v sharp &> /dev/null; then
    echo "📦 Instalando sharp-cli..."
    npm install -g sharp-cli
fi

# Converter imagens principais
echo "🔄 Convertendo logo_rayuela.jpg..."
sharp -i public/logo_rayuela.jpg -o public/logo_rayuela.webp -f webp -q 85

echo "🔄 Convertendo logo_rayuela_h.png..."
sharp -i public/logo_rayuela_h.png -o public/logo_rayuela_h.webp -f webp -q 85

echo "✅ Conversão concluída!"
echo ""
echo "📝 Próximos passos:"
echo "1. Atualize as referências de imagem no código (instruções no README)"
echo "2. Execute 'npm run build' para gerar a build otimizada"
echo "3. Faça o deploy e teste no PageSpeed Insights"
