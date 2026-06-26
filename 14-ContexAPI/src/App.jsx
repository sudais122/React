import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme, settheme] = useState('light');
  return (
    <>
    <Navbar  theme={theme}/>
    </>
  )
}

export default App