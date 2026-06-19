import './App.css'
import React, { useState } from "react";

export default function ProductPage() {

  const [Cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  function AddtoCaart(product) {
    setCart((prev) => [...prev, product]);
  }

  function toggleCart() {
    setOpenCart(!openCart);
  }

  return (
    <div className="shop-page">

      <div className="cart-card" onClick={toggleCart}>
        <h3>🛒 Cart</h3>
        <span className="cart-count">{Cart.length}</span>
      </div>


      <section className="hero">
        <h2>Discover Premium Products</h2>
        <p>Modern items made for your lifestyle</p>
      </section>


      <div className="products">

        <div className="card">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" />
          <h3>Luxury Smart Watch</h3>
          <p className="price">$199</p>
          <button onClick={() => AddtoCaart({
            title: "Luxury Smart Watch",
            price: 199,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          })}>
            Add to Cart
          </button>
        </div>


        <div className="card">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" />
          <h3>Wireless Headphones</h3>
          <p className="price">$129</p>
          <button onClick={() => AddtoCaart({
            title: "Wireless Headphones",
            price: 129,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          })}>
            Add to Cart
          </button>
        </div>

      </div>


      {openCart && (
        <div className="cart-panel">

          <h2>Your Cart</h2>

          {Cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            Cart.map((item, index) => (
              <div key={index} className="cart-item">

                <img src={item.image} />

                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>

              </div>
            ))
          )}

        </div>
      )}

    </div>
  );
}