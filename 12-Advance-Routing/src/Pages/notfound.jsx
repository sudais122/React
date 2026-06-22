import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const NotFound = () => {
  return (
    <section className="page notfound">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="page-text">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
    </section>
  )
}

export default NotFound