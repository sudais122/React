import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import './App.css'  

function App() {
  const [length,setlength] = useState(8);
  const [number,numberallowed] = useState(false);
  const [char,charallowed] = useState(false);
  const [password,setpassword] = useState('');

  const passwordGenerator =  useCallback(()=>{
    let pass = "";
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberallowed) str += '0123456789';
    if(charallowed) str += '!@#$%^&*()_+';

    for(let i=0;i<=length;i++){
      const index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }
     setpassword(pass);
  },[char,password,length,number])

  useEffect(()=>{
    passwordGenerator();
  },[char,length,number])

  return (
    <div className='w-120 shadow-md rounded-lg px-8 my-8 text-orange-500 bg-gray-500 p-3 m-90 flex flex-col gap-4'>
      <h1 className='text-white text-center m-8 text-3xl'>Password Generator</h1>

      <input
        type="text"
        value={password}
        readOnly
        placeholder='password'
        className='outline-none w-full py-2 px-4 bg-white text-black rounded-md'
      />

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer' onClick={() => navigator.clipboard.writeText(password)}>
        Copy
      </button>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setlength(Number(e.target.value))}
          />
          <label className='text-white'>Length: {length}</label>

          <input
            type="checkbox"
            checked={numberallowed}
            onChange={() => numberallowed(prev => !prev)}
          />
          <span>Numbers</span>

          <input
            type="checkbox"
            checked={char}
            onChange={() => charallowed(prev => !prev)}
          />
          <span>Char</span>

        </div>
      </div>
    </div>
  )
}

export default App