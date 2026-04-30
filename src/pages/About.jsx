import React from 'react';
import { Heart, Shield, Zap } from 'lucide-react';
import './AboutPage.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Our Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="kicker">OUR STORY</div>
          <h1>On a mission to make India healthier.</h1>
          <p>
            HealthSaathi started in 2024 when we noticed most health apps were built around Western diets and lifestyles. We built a saathi for Indians, by Indians — in Hindi and English.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values-section">
        <div className="values-container">
          <div className="kicker">OUR VALUES</div>
          <h2>What we stand for</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="icon-wrapper">
                <Heart size={20} color="#10b981" />
              </div>
              <h3>India first</h3>
              <p>Every feature designed for Indian food, culture & lifestyle.</p>
            </div>
            
            <div className="value-card">
              <div className="icon-wrapper">
                <Shield size={20} color="#10b981" />
              </div>
              <h3>Privacy always</h3>
              <p>Your health data never leaves Indian servers, never sold.</p>
            </div>
            
            <div className="value-card">
              <div className="icon-wrapper">
                <Zap size={20} color="#10b981" />
              </div>
              <h3>Simple wins</h3>
              <p>If your dadi can't use it, we haven't designed it well.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
