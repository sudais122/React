import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img 
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
                            alt="Logo" 
                        />
                    </Link>
                </div>
                <div className="footer-links-grid">
                    <div className="footer-col">
                        <h3>Resources</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li><a href="https://discord.com" target="_blank" rel="noreferrer">Discord</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Legal</h3>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
            </div>
        </footer>
    );
}