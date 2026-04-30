import React from 'react';
import { Sparkles, Apple, Play } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          <div className="sparkle-wrapper">
            <Sparkles size={28} color="#f59e0b" fill="#f59e0b" className="sparkle-icon" />
          </div>
          
          <h2 className="cta-title">Start your healthier today.</h2>
          <p className="cta-subtitle">Free download. No credit card needed. Cancel anytime.</p>
          
          <div className="cta-buttons">
            <button className="store-btn">
              <Apple size={22} color="#111827" fill="#111827" />
              <div className="btn-text">
                <span className="btn-sub">Download on the</span>
                <span className="btn-main">App Store</span>
              </div>
            </button>
            <button className="store-btn">
              <Play size={20} color="#111827" fill="#111827" />
              <div className="btn-text">
                <span className="btn-sub">Get it on</span>
                <span className="btn-main">Google Play</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
