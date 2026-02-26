import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Code, Math } from './Apps.jsx'

function Main(){
  return(
    <>
      <h1>Hello this is inside the main.jsx</h1>
    </>
  )
}

const Rnderanchor = (
  <a href="https://google.com">click me to visit google</a>
)

const ReactElement = React.createElement(
  'a',
  { href: "https://google.com" },
  "click me to visit googlee"
)
createRoot(document.getElementById('root')).render(
  <>
    {ReactElement}
    <App />
    <Code />
    <Math />
    <Main /> 
  </>
)
