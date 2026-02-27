import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  const [counter,setcounter]= useState(19)

  const addvalues = () => {
    if(counter >= 20){
      counter = 20
    }else{
      setcounter(counter + 1) 
    }
  }

  const removevalue = ()=>{
    if(counter <= 0){
      counter = 0
    }else{
      setcounter(counter - 1);
    }
  }
  return (
    <>
    <h1>Chai Aur react </h1>
    <h2>Counter Vlaue: {counter}</h2>
    <button onClick = {addvalues}>Add Value{counter}</button>
    <br/>
    <button onClick={removevalue}>Remove Value</button>
    <p>Counter value {counter}</p>
    </>
  )
}

export default App
