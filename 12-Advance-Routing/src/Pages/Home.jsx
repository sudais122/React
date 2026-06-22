import React from 'react'
import './Pages.css'

const Home = () => {
  return (
    <section className="page">
      <h1 className="page-title">Welcome to MyApp</h1>
      <p className="page-text">
        Your one-stop solution for getting things done quickly and easily.
      </p>
      <button className="page-btn">Get Started</button>
    </section>
  )
}

export default Home