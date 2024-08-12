import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BannerProvider } from './Context/BannerContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BannerProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </BannerProvider>
  </StrictMode>,
)
