import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fontes auto-hospedadas para evitar render-blocking do Google Fonts
import '@fontsource/barriecito'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import './index.css'
import App from './App.jsx'
import LinksPage from './LinksPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {window.location && window.location.pathname && window.location.pathname.endsWith('/links') ? (
      <LinksPage />
    ) : (
      <App />
    )}
  </StrictMode>,
)
