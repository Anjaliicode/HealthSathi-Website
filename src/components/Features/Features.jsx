import React from 'react';
import { Bot, Shield, Camera, Leaf, Apple } from 'lucide-react';
import webThali from '../../assets/web-thali.jpg';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      {/* Featured In Banner */}
      <div className="featured-banner">
        <div className="featured-container">
          <span className="featured-text">AS FEATURED IN</span>
          <div className="featured-logos">
            <span className="logo-text">YourStory</span>
            <span className="logo-text">Inc42</span>
            <span className="logo-text">ET Health</span>
            <span className="logo-text">Mint</span>
            <span className="logo-text">TOI</span>
            <span className="logo-text">Forbes India</span>
          </div>
        </div>
      </div>

      <div className="features-container main-content">
        <div className="features-header">
          <div className="features-kicker">ONE SAATHI · EVERYTHING YOU NEED</div>
          <h2 className="features-title">Built for everyday Indian living</h2>
          <p className="features-subtitle">No Western diets. Just poha, dal and roti you actually eat.</p>
        </div>

        <div className="features-grid">
          {/* Top Left: Large Card */}
          <div className="feature-card large-card">
            <div className="thali-image-wrapper">
              <div className="tag-floating">
                <Apple size={14} className="apple-icon" color="#10b981" /> 
                <span>5,000+ Indian dishes</span>
              </div>
              <img src={webThali} alt="Indian Thali" className="thali-img" />
            </div>
            <div className="card-content large-content">
              <h3>Indian-first diet tracking</h3>
              <p>Poha, Dal Tadka, Khichdi, Chole — accurate macros. Scan with camera, log in seconds.</p>
              <div className="pill-group">
                <span className="pill">Poha</span>
                <span className="pill">Dal Tadka</span>
                <span className="pill">Khichdi</span>
                <span className="pill">Roti</span>
                <span className="pill">Sabzi</span>
                <span className="pill">Curd</span>
                <span className="pill">Sprouts</span>
              </div>
            </div>
          </div>

          {/* Top Right: Two Stacked Cards */}
          <div className="right-column-wrapper">
            <div className="feature-card blue-card">
              <div className="card-icon-bg blue-icon-bg">
                <Bot size={20} color="white" />
              </div>
              <Bot size={140} className="watermark-icon" color="rgba(255,255,255,0.1)" />
              <div className="card-content dark-content">
                <h3>AI in Hindi</h3>
                <p>Chat naturally in Hinglish. Available 24x7.</p>
              </div>
            </div>

            <div className="feature-card white-card privacy-card">
              <div className="card-icon-bg red-icon-bg">
                <Shield size={20} color="#ef4444" />
              </div>
              <div className="card-content">
                <h3>Privacy first</h3>
                <p>End-to-end encrypted. Never sold.</p>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="feature-card beige-card">
            <div className="card-icon-bg orange-icon-bg text-icon">
              🔥
            </div>
            <div className="card-content">
              <h3>Daily streaks</h3>
              <p>Small goals, lasting habits.</p>
            </div>
          </div>

          <div className="feature-card white-card">
            <div className="card-icon-bg green-light-icon-bg">
              <Camera size={20} color="#10b981" />
            </div>
            <div className="card-content">
              <h3>Snap to log</h3>
              <p>Snap your thali — AI identifies it all.</p>
            </div>
          </div>

          <div className="feature-card green-card">
            <div className="card-icon-bg white-icon-bg">
              <Leaf size={20} color="#10b981" />
            </div>
            <div className="card-content">
              <h3>Free forever</h3>
              <p>Core features, zero charges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
