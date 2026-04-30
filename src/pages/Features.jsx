import React from 'react';
import { Apple, CheckCircle2, ArrowRight, Bot, Activity, X } from 'lucide-react';
import webThali from '../assets/web-thali.jpg';
import webAppHands from '../assets/web-app-hands.jpg';
import webYoga from '../assets/web-yoga.png';
import './FeaturesPage.css';

const Features = () => {
  return (
    <div className="features-page">
      {/* Header Section */}
      <section className="features-page-header">
        <h1>One app. Complete health.</h1>
        <p>Diet, fitness, AI & reports — all in one place, free.</p>
      </section>

      {/* Feature 01 Section */}
      <section className="feature-detail-section">
        <div className="feature-detail-container">
          <div className="feature-detail-content">
            <div className="feature-badge">
              <Apple size={14} className="badge-icon" />
              <span>FEATURE 01</span>
            </div>
            
            <h2>Track Indian meals in seconds</h2>
            <p className="feature-description">
              Pre-loaded database of 5,000+ Indian dishes — Poha, Khichdi, Dal Tadka, Chole Bhature, Idli — with accurate macros measured in real Indian portions.
            </p>

            <ul className="feature-checklist">
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>Photo scan to log food</span>
              </li>
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>Custom recipe builder</span>
              </li>
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>Veg / Non-veg / Jain filters</span>
              </li>
            </ul>

            <a href="#" className="learn-more-link">
              Learn more <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-detail-image">
            <img src={webThali} alt="Indian Thali" />
          </div>
        </div>
      </section>

      {/* Feature 02 Section */}
      <section className="feature-detail-section reverse">
        <div className="feature-detail-container">
          <div className="feature-detail-image">
            <img src={webAppHands} alt="HealthSaathi AI App" />
          </div>

          <div className="feature-detail-content">
            <div className="feature-badge blue-badge">
              <Bot size={14} className="badge-icon" />
              <span>FEATURE 02</span>
            </div>
            
            <h2>AI that speaks your language</h2>
            <p className="feature-description">
              Ask anything in Hindi, English, or Hinglish. Get answers based on Indian context — not generic Western advice from textbooks.
            </p>

            <ul className="feature-checklist">
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>24x7 voice + text chat</span>
              </li>
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>Diet plans for diabetes, PCOS, BP</span>
              </li>
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>Doctor referral when serious</span>
              </li>
            </ul>

            <a href="#" className="learn-more-link">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Feature 03 Section */}
      <section className="feature-detail-section">
        <div className="feature-detail-container">
          <div className="feature-detail-content">
            <div className="feature-badge orange-badge">
              <Activity size={14} className="badge-icon" />
              <span>FEATURE 03</span>
            </div>
            
            <h2>Fitness designed for India</h2>
            <p className="feature-description">
              From morning Yoga to evening walks — everything tailored to Indian lifestyle. No fancy gym, no expensive equipment, just consistency.
            </p>

            <ul className="feature-checklist">
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>Surya Namaskar guided sessions</span>
              </li>
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>Step + sleep tracking</span>
              </li>
              <li>
                <CheckCircle2 size={20} fill="#10b981" color="white" className="check-icon" />
                <span>Festival-ready workout plans</span>
              </li>
            </ul>

            <a href="#" className="learn-more-link">
              Learn more <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-detail-image">
            <img src={webYoga} alt="Fitness and Yoga" />
          </div>
        </div>
      </section>

      {/* Why HealthSaathi Section */}
      <section className="why-section">
        <div className="why-container">
          <h2>Why HealthSaathi?</h2>
          
          <div className="comparison-table">
            <div className="comparison-column other-apps">
              <div className="column-header">OTHER APPS</div>
              <ul className="comparison-list">
                <li><X size={16} className="x-icon" /> Western foods only</li>
                <li><X size={16} className="x-icon" /> English-only AI</li>
                <li><X size={16} className="x-icon" /> Generic advice</li>
                <li><X size={16} className="x-icon" /> Hidden subscription</li>
              </ul>
            </div>
            
            <div className="comparison-column healthsaathi-app">
              <div className="column-header">HEALTHSAATHI</div>
              <ul className="comparison-list">
                <li><CheckCircle2 size={16} color="white" /> 5,000+ Indian dishes</li>
                <li><CheckCircle2 size={16} color="white" /> Hindi + English + Hinglish</li>
                <li><CheckCircle2 size={16} color="white" /> Indian-context advice</li>
                <li><CheckCircle2 size={16} color="white" /> Free forever core</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Features;
