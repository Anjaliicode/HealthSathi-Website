import React from 'react';
import { Smartphone, Camera, HeartPulse } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="hiw-header">
          <div className="hiw-kicker">HOW IT WORKS</div>
          <h2 className="hiw-title">Three simple steps</h2>
        </div>

        <div className="hiw-grid">
          {/* Step 1 */}
          <div className="hiw-card">
            <div className="step-number">01</div>
            <div className="hiw-icon-bg">
              <Smartphone size={24} color="#059669" />
            </div>
            <div className="hiw-content">
              <h3>Download & Setup</h3>
              <p>Free download. Choose Hindi or English. 60 seconds onboarding.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="hiw-card">
            <div className="step-number">02</div>
            <div className="hiw-icon-bg">
              <Camera size={24} color="#059669" />
            </div>
            <div className="hiw-content">
              <h3>Log Your Meals</h3>
              <p>Snap a photo or search. We've got every Indian dish.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="hiw-card">
            <div className="step-number">03</div>
            <div className="hiw-icon-bg">
              <HeartPulse size={24} color="#059669" />
            </div>
            <div className="hiw-content">
              <h3>Get Smarter Daily</h3>
              <p>AI tips, weekly reports, streaks that motivate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
