import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon"></div>
          <span>DataLabel AI</span>
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <div className="nav-item dropdown">
            <Link to="/features" className="nav-link">Platform <ChevronDown size={14} /></Link>
            {/* Dropdown content would go here */}
          </div>
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/docs" className="nav-link">Docs</Link>
          
          <div className="mobile-actions">
            <Link to="/login" className="nav-link">Log In</Link>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
          </div>
        </div>

        <div className="navbar-actions">
          <Link to="/login" className="nav-link hidden-mobile">Log In</Link>
          <Link to="/signup" className="btn btn-primary hidden-mobile">Get Started</Link>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
