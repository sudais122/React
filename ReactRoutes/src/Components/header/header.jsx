import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Navbar() {
    return (
        <nav className="main-nav">
            <div className="nav-container">
                {/* Logo Section */}
                <Link to="/" className="nav-logo">
                    <img 
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
                        alt="Logo" 
                    />
                </Link>

                {/* Navigation Links */}
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </li>
                </ul>

                {/* Action Buttons */}
                <div className="nav-actions">
                    <Link to="/login" className="btn-login">Log in</Link>
                    <Link to="/signup" className="btn-get-started">Get started</Link>
                </div>
            </div>
        </nav>
    );
}