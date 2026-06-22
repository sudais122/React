import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">MyApp</div>

      <p className="footer-copy">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer