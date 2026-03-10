import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <main className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Build Your Future <span className="text-orange">With Us</span></h1>
                    <p>
                        Discover the tools and community you need to take your projects 
                        to the next level. Fast, reliable, and open source.
                    </p>
                    <div className="hero-btns">
                        <Link to="/signup" className="btn-primary">Get Started</Link>
                        <Link to="/about" className="btn-secondary">Learn More</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="Hero Illustration" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="section-header">
                    <h2>Why Choose Our Platform?</h2>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon">🚀</div>
                        <h3>Fast Performance</h3>
                        <p>Optimized for speed to ensure your users have the best experience possible.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">🛡️</div>
                        <h3>Secure by Default</h3>
                        <p>We prioritize security so you can focus on building your great ideas.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">💻</div>
                        <h3>Open Source</h3>
                        <p>Contribute and grow with a community that values transparency.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}