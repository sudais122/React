import React from 'react'
import './Pages.css'

const Contact = () => {
  return (
    <section className="page">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-text">
        Have a question? Reach out and we'll get back to you soon.
      </p>

      <div className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea" rows="5" />
        <button className="page-btn">Send Message</button>
      </div>
    </section>
  )
}

export default Contact