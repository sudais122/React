import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  let [A, setA] = useState(0);

  function Increase(){
    setA(A+1);
  }
  function Decrease(){
    if(A == 0){
      A = 0;
    }else{
      setA(A-1);
    }
  }
  function Jump(){
    setA(A+5);
  }

  function Reset(){
    setA(A=0);
  }

  const [name,setname] = useState('');
  const [Submit,Setsubmit] = useState('');
  const [message, showmessage] = useState('');
  const [login, setlogin] = useState('')
  return (
    <>
      <div className="counter-container">
        <p>{A}</p>

        <div className="btn-group">
          <button onClick={Increase}>Increase</button>
          <button onClick={Decrease}>Decrease</button>
          <button onClick={Jump}>Jump by 5</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>

      <input
       onChange={(elem)=>{
         setname(elem.target.value);
      }}
      value={name}
       type="text" 
       id='name' 
       placeholder='Enter your name'
       />

      <button onClick={()=>{
        Setsubmit(name);
      }}>Submit</button>

      <button onClick={()=>{setname('')}}>Clear Input</button>
      <p id='Print'>Hello,{Submit}</p>

      <button onClick={()=>{showmessage('Heelo mesaeg is shown')}}>Show Message</button>
      <p>{message}</p>
      <button onClick={()=>{showmessage('')}}>Hide</button><br></br>

      <button onClick={()=>{setlogin('Welcome')}}>Login</button>
      <button onClick={()=>{setlogin('Please Login')}}>Logout</button>
      <p>{login}</p>
    </>
  )
}

export default App;