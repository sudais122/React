import React from 'react'
import Nav2 from './Nav2'
import './Nav2.css'

const Navbar = ({theme}) => {
  return (
    <header className="navbar">
      <p className="logo">Sudais.dev</p>
      <Nav2 theme={theme}/>
    </header>
  )
}

export default Navbar