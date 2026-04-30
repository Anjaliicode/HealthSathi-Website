import React from 'react';
import { ArrowRight, Download, Play, Bot, Star } from 'lucide-react';
import webHero from '../../assets/web-hero.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-new">NEW</span>
            <span className="badge-text">
              Hindi AI Saathi now live <ArrowRight size={14} className="badge-arrow" />
            </span>
          </div>
          
          <h1 className="hero-title">
            A healthier India,<br />
            <span className="text-green">one saathi at a<br />time.</span>
          </h1>
          
          <p className="hero-subtitle">
            Track Roti, Dal, Sabzi. Chat with AI in Hindi. Build daily streaks — completely free, made for India.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              <Download size={18} /> Download Free <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              <div className="play-icon-wrapper">
                <Play size={14} fill="#10b981" color="#10b981" />
              </div>
              Watch 1-min demo
            </button>
          </div>
          
          <div className="hero-ratings">
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/100?img=5" alt="User 1" />
              <img src="https://i.pravatar.cc/100?img=12" alt="User 2" />
              <img src="https://i.pravatar.cc/100?img=32" alt="User 3" />
              <div className="avatar-more">+4L</div>
            </div>
            <div className="rating-info">
              <div className="stars-row">
                <div className="stars">
                  <Star size={14} fill="#fbbf24" color="#fbbf24" />
                  <Star size={14} fill="#fbbf24" color="#fbbf24" />
                  <Star size={14} fill="#fbbf24" color="#fbbf24" />
                  <Star size={14} fill="#fbbf24" color="#fbbf24" />
                  <Star size={14} fill="#fbbf24" color="#fbbf24" />
                </div>
                <span className="rating-score">4.8</span>
              </div>
              <div className="rating-text">12,400+ reviews · Play Store</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="image-wrapper">
            <img src={webHero} alt="Woman using HealthSaathi app while eating Indian food" className="main-image" />
            
            {/* Floating Card: AI Chat */}
            <div className="floating-card chat-card">
              <div className="chat-header">
                <div className="bot-icon-bg">
                  <Bot size={14} color="white" />
                </div>
                <div className="chat-title">
                  <span className="bot-name">AI Saathi</span>
                  <span className="bot-status"><span className="status-dot"></span> Online</span>
                </div>
              </div>
              <div className="chat-bubble">Poha for breakfast is perfect! 320 kcal.</div>
            </div>

            {/* Floating Card: Calories */}
            <div className="floating-card calories-card">
              <div className="calories-chart">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="circle"
                    strokeDasharray="62, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="chart-percentage">62%</span>
              </div>
              <div className="calories-info">
                <span className="cal-label">TODAY</span>
                <span className="cal-value">1,247<span className="cal-total">/2,000 kcal</span></span>
              </div>
            </div>

            {/* Floating Card: Streak */}
            <div className="floating-card streak-card">
              <div className="streak-header">
                <span className="fire-icon">🔥</span>
                <span className="streak-days">47</span>
              </div>
              <div className="streak-label">DAY STREAK</div>
              <div className="streak-bars">
                <div className="bar filled"></div>
                <div className="bar filled"></div>
                <div className="bar filled"></div>
                <div className="bar filled"></div>
                <div className="bar filled"></div>
                <div className="bar filled"></div>
                <div className="bar empty"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
