import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Apple, Play } from 'lucide-react';

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Left Column: Brand and App Links */}
          <div className="footer-brand-section">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-circle">
                <Heart size={18} fill="white" color="white" />
              </div>
              <span className="footer-logo-text">HealthSaathi</span>
            </Link>
            
            <p className="footer-description">
              India's own AI health companion. In Hindi & English, for every Indian.
            </p>
            
            <div className="footer-app-links">
              <a href="#" className="app-store-btn">
                <Apple size={20} className="app-icon" />
                <div className="app-btn-text">
                  <span className="app-btn-sub">Download on the</span>
                  <span className="app-btn-main">App Store</span>
                </div>
              </a>
              <a href="#" className="app-store-btn">
                <Play size={20} className="app-icon" />
                <div className="app-btn-text">
                  <span className="app-btn-sub">Get it on</span>
                  <span className="app-btn-main">Google Play</span>
                </div>
              </a>
            </div>
            
            <div className="footer-social">
              <a href="#" className="social-icon"><TwitterIcon /></a>
              <a href="#" className="social-icon"><InstagramIcon /></a>
              <a href="#" className="social-icon"><LinkedinIcon /></a>
              <a href="#" className="social-icon"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="footer-links-section">
            <div className="footer-column">
              <h3 className="footer-heading">PRODUCT</h3>
              <ul className="footer-list">
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">COMPANY</h3>
              <ul className="footer-list">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">SUPPORT</h3>
              <ul className="footer-list">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 HealthSaathi Technologies Pvt. Ltd. · Bengaluru, India IN
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
