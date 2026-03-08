import { useState } from 'react'
import React from 'react'
import Inputbox from './Components/inputbox'
import Apikey from './Hooks/api'
import './App.css'

function App() {
  Apikey();
  return (
   <>
    <Inputbox />
    </>
  )
}

export default App
