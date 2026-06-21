import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>

        <Link to='/' className='navbar-links'>Home</Link>
        <Link to= '/About' className='navbar-links'>About</Link>
        <Link to='/Contact' className='navbar-links'>Contact</Link>

      <button className="navbar-btn">Sign In</button>
    </nav>
  )
}

export default Navbar