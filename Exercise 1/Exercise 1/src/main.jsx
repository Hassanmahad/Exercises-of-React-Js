import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseCard from './UseCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <UseCard /> */}
  </StrictMode>,
)
