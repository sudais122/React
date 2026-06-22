import React from 'react'
import './Pages.css'
import { Outlet,Link, useParams } from 'react-router-dom'

const Product = () => {
  const products = [
    { id: 1, name: 'Basic Plan', price: '$9/mo', desc: 'Perfect for getting started.' },
    { id: 2, name: 'Pro Plan', price: '$29/mo', desc: 'For growing teams and projects.' },
    { id: 3, name: 'Enterprise', price: '$99/mo', desc: 'Advanced features and support.' },
  ]

  return (
    <section className="page">
      <h1 className="page-title">Our Products</h1>
      <p className="page-text">Choose the plan that fits your needs.</p>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-desc">{product.desc}</p>
            <button className="page-btn">Choose</button>
          </div>
        ))}
        <Link to='Menz'>Menz</Link>
        <Link to='Women'>Women</Link>
        <Outlet/>
      </div>
    </section>
  )
}

export default Product