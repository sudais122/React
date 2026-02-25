import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Code, Math } from './Apps.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Code />
    <Math />
  </>
)
