import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fontsource/comfortaa"; // Defaults to weight 400
import "@fontsource/pacifico"; // Defaults to weight 400
import { inject } from '@vercel/analytics';
inject();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
