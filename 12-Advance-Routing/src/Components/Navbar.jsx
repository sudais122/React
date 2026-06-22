import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/product" className="navbar-link">Product</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>

      <button className="navbar-btn">Sign In</button>
    </nav>
  )
}

export default Navbar