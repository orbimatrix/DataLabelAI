import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="navbar-logo" style={{ marginBottom: '1rem' }}>
                            <div className="logo-icon"></div>
                            <span>DataLabel AI</span>
                        </div>
                        <p className="text-muted">
                            Accelerating AI development with high-quality, human-in-the-loop data annotation.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Platform</h4>
                        <Link to="/features">Features</Link>
                        <Link to="/how-it-works">How It Works</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/security">Security</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <Link to="/blog">Blog</Link>
                        <Link to="/case-studies">Case Studies</Link>
                        <Link to="/docs">Documentation</Link>
                        <Link to="/api">API Reference</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/legal">Legal</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="text-muted">&copy; 2024 DataLabel AI. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
