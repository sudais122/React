import React from 'react'
import './Button.css'

const Button = ({onClick}) => {

  return (
    <>
      <button className='btn' onClick={onClick}>
        Click Me
      </button>
      <button className='btn' onClick={{onClick}}> Hello</button>
      <p className='text'>
        Hello React Developer
      </p>
      <input className='input' type="text" placeholder='Enter your name' />
    </>
  )
}

export default Button