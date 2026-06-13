import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-logo">
          <span className="brand-name">JobHub</span>
        </div>

        {/* Nav Links */}
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#jobs">Jobs</a>
          </li>
          <li>
            <a href="#companies">Companies</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}