import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
