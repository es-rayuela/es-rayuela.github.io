# 🚀 Otimizações de Performance - Rayuela

Este documento lista todas as otimizações implementadas para melhorar a nota de desempenho mobile no Google PageSpeed Insights.

## ✅ Implementado Automaticamente

### 1. HTML (index.html)
- ✅ Preload do logo LCP com `fetchpriority="high"`
- ✅ Preconnect para Google Fonts já configurado
- ✅ Font-display: swap nas fontes

### 2. React (App.jsx)
- ✅ Dimensões explícitas em todas as imagens (width/height)
- ✅ Code splitting com React.lazy em: Testimonials, About, Contact
- ✅ Suspense boundaries para carregamento assíncrono

### 3. Vite (vite.config.js)
- ✅ Minificação esbuild ativada
- ✅ Sourcemaps desativados em produção
- ✅ Assets inline limit: 4KB
- ✅ Chunks vendor separados:
  - vendor-react: React + ReactDOM
  - vendor-motion: Framer Motion
  - vendor-icons: React Icons

### 4. Tailwind
- ✅ Arquivo renomeado corretamente (tailwind.config.js)
- ✅ Purge configurado para: index.html, src/**/*.{js,ts,jsx,tsx}

---

## 📋 Tarefas Manuais Necessárias

### PASSO 1: Converter Imagens para WebP

Execute o script fornecido:
```bash
bash convert-images.sh
```

Ou faça manualmente:
```bash
npm install -g sharp-cli
sharp -i public/logo_rayuela.jpg -o public/logo_rayuela.webp -f webp -q 85
sharp -i public/logo_rayuela_h.png -o public/logo_rayuela_h.webp -f webp -q 85
```

### PASSO 2: Atualizar Referências de Imagens

Após converter, atualize os arquivos:

**Em `src/App.jsx` (linha ~91):**
```jsx
// ANTES:
src={scrolled ? `/logo_rayuela_h.png` : `/logo_rayuela.jpg`}

// DEPOIS:
src={scrolled ? `/logo_rayuela_h.webp` : `/logo_rayuela.webp`}
```

**Em `index.html` (linha ~113):**
```html
<!-- ANTES: -->
<link rel="preload" as="image" href="/logo_rayuela.jpg" fetchpriority="high">

<!-- DEPOIS: -->
<link rel="preload" as="image" href="/logo_rayuela.webp" fetchpriority="high">
```

### PASSO 3: Build e Deploy

```bash
# Build otimizado
npm run build

# Deploy (ajuste conforme seu método)
npm run deploy
# ou
git add .
git commit -m "feat: otimizações de performance mobile"
git push
```

### PASSO 4: Validar no PageSpeed

1. Acesse: https://pagespeed.web.dev/
2. Cole: https://es-rayuela.github.io/
3. Selecione: **Mobile**
4. Clique em "Analisar"

---

## 📊 Melhorias Esperadas

### Métricas Core Web Vitals:
- **LCP**: Preload + WebP + dimensões explícitas → melhora ~30-40%
- **TBT**: Code splitting → redução ~20-30%
- **CLS**: Dimensões explícitas → próximo de 0
- **FCP**: Chunks vendor → melhora ~15-20%

### Tamanho de Bundle:
- **JS inicial**: Redução de ~15-20KB com lazy loading
- **Imagens**: Redução de ~70-80% com WebP
- **Cache**: Melhor aproveitamento com chunks separados

---

## 🔍 Próximas Otimizações Avançadas (Opcional)

Se após implementar tudo acima ainda precisar de mais performance:

1. **Preact compat**: Substituir React por Preact (~30KB menos)
2. **Critical CSS inline**: Extrair CSS crítico para o HTML
3. **Service Worker**: Cache offline e PWA
4. **CDN**: Servir assets estáticos de CDN
5. **HTTP/2 Push**: Se o host suportar
6. **Compress assets**: Gzip/Brotli no servidor

---

## 📝 Checklist Rápido

- [ ] Executar `bash convert-images.sh`
- [ ] Atualizar referências de imagem em App.jsx
- [ ] Atualizar referência de imagem em index.html
- [ ] Executar `npm run build`
- [ ] Fazer deploy
- [ ] Testar no PageSpeed Insights mobile
- [ ] Verificar se a nota de Performance melhorou

---

**Data de implementação**: 2025-11-07
**Versão**: 1.0
