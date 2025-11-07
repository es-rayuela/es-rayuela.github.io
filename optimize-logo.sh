#!/bin/bash

# Script para redimensionar logo_rayuela.webp
# De 773x834 para 490x490 (economia de ~10KB)

echo "🖼️  Redimensionando logo_rayuela.webp..."

# Criar versão otimizada com dimensões corretas (490x490)
sharp resize 490 490 --fit cover --input public/logo_rayuela.webp --output public/logo_rayuela_optimized.webp --format webp --quality 85

# Backup do original
mv public/logo_rayuela.webp public/logo_rayuela_original.webp

# Usar versão otimizada
mv public/logo_rayuela_optimized.webp public/logo_rayuela.webp

echo "✅ Logo redimensionado de 773x834 para 490x490"
echo "📊 Economia estimada: ~10KB"
echo ""
echo "💾 Backup salvo em: public/logo_rayuela_original.webp"
