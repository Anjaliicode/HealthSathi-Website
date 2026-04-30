import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Heart, ArrowRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon-wrapper">
            <div className="logo-circle">
              <Heart className="heart-icon" size={20} fill="white" />
            </div>
            <div className="logo-dot"></div>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-title">HealthSaathi</span>
            <span className="logo-subtitle">AI - INDIA</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-links desktop-only">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
            Home
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Features
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Pricing
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
        </div>

        {/* Right Action Buttons */}
        <div className="navbar-actions desktop-only">
          <Link to="/login" className="login-link">Login</Link>
          <button className="get-app-btn">
            Get App <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink to="/features" className="mobile-nav-link" onClick={toggleMobileMenu}>Features</NavLink>
          <NavLink to="/pricing" className="mobile-nav-link" onClick={toggleMobileMenu}>Pricing</NavLink>
          <NavLink to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</NavLink>
          <NavLink to="/blog" className="mobile-nav-link" onClick={toggleMobileMenu}>Blog</NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</NavLink>
          <div className="mobile-actions">
            <Link to="/login" className="mobile-login-link" onClick={toggleMobileMenu}>Login</Link>
            <button className="get-app-btn mobile-get-app">
              Get App <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
