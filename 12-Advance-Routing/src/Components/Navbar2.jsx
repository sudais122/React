import React from 'react'
import './Navbar'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  let navigate=useNavigate();

  function BacktoHome(){
      navigate('/');
  }
  return (
    <>
    <div className='BtnDiv'>
      <button className='Button' onClick={BacktoHome}>Back to Home</button>
      <button className='Button' onClick={()=>{navigate(-1)}}>Back</button>
      <button className='Button' onClick={()=>{navigate(+1)}}>Front</button>
    </div>
    </>
  )
}

export default Navbar2