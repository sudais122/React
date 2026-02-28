import React from 'react'
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Main() {
  const [color,setcolor] = useState("bg-yellow-900")
  return (
    <>
    <div className={`w-screen h-screen ${color} flex items-center justify-center `}>
      <div className='rounded-xl w-170 h-12 bg-white flex items-center justify-center cursor-pointer gap-4'>
        <div onClick={()=> setcolor('bg-red-900')} className='bg-red-900 w-16 h-8 rounded-full text-white flex items-center justify-center'>Brown</div>
        <div onClick={()=> setcolor('bg-blue-900')} className='bg-blue-900 w-16 h-8 rounded-full text-white flex items-center justify-center'>Blue</div>
        <div onClick={()=> setcolor('bg-green-900')} className='bg-green-900 w-16 h-8 rounded-full text-white flex items-center justify-center'>Green</div>
        <div onClick={()=> setcolor('bg-purple-900')} className='bg-purple-900 w-16 h-8 rounded-full text-white flex items-center justify-center'>Purple</div>
        <div onClick={()=> setcolor('bg-orange-900')} className='bg-orange-900 w-16 h-8 rounded-full text-white flex items-center justify-center'>Orange</div>
        <div onClick={()=> setcolor('bg-yellow-400')} className='bg-yellow-400 w-16 h-8 rounded-full  text-white flex items-center justify-center'>Yellow</div>
        <div onClick={() => setcolor('bg-gray-400')} className='bg-gray-400 w-16 h-8 rounded-full  text-white flex items-center justify-center'>Gray</div>
        <div onClick={() => setcolor('bg-black')} className='bg-black w-16 h-8 rounded-full  text-white flex items-center justify-center'>Black</div>
      </div>
    </div>
    </>
  )
}
export default Main;
