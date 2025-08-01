import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Container } from './container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container/>
    
  </StrictMode>,
)
