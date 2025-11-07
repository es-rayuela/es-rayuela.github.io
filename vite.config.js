import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Minificação com esbuild (rápido e eficiente)
    minify: 'esbuild',
    // Desativa sourcemaps em produção para reduzir tamanho
    sourcemap: false,
    // Define limite para inline de assets (4KB) - evita base64 grandes
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Separação manual de chunks para melhor cache
        manualChunks: {
          // Vendor chunk com bibliotecas principais
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['react-icons/fa', 'react-icons/si'],
        },
      },
    },
    // Chunk size warning aumentado para evitar warnings desnecessários
    chunkSizeWarningLimit: 600,
  },
})
