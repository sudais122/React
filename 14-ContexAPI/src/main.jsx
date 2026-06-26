import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Themecontex from './Context/Themecontex.jsx'

createRoot(document.getElementById('root')).render(
  <Themecontex>  
    <App/>
  </Themecontex>
)
