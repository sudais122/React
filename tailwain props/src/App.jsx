import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

let myobj = {
  name : "Sudais",
  age : 20,
  city : "Swabi"
}
function App() {
  return (
    <>
    <Card username = "Sudais" des = "abc" Obj = {myobj}/>
    <Card username = "Manzoor Ahmad" des="xyz"/>

    </>
  )
}

export default App
