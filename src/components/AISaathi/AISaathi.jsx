import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import webAppHands from '../../assets/web-app-hands.jpg';
import './AISaathi.css';

const AISaathi = () => {
  return (
    <section className="ai-saathi-section">
      <div className="ai-saathi-container">
        {/* Left Side: Image */}
        <div className="ai-image-wrapper">
          <img src={webAppHands} alt="Using HealthSaathi AI app" className="ai-image" />
        </div>

        {/* Right Side: Content */}
        <div className="ai-content">
          <div className="ai-kicker">AI THAT GETS YOU</div>
          <h2 className="ai-title">A saathi who speaks like your dadi would.</h2>
          <p className="ai-subtitle">
            No complicated medical jargon. Hindi, English, Hinglish — exactly how you speak.
          </p>

          <ul className="ai-feature-list">
            <li>
              <CheckCircle2 className="check-icon" size={24} fill="#10b981" color="white" />
              <span>Personalised diet plans for diabetes, PCOS, BP</span>
            </li>
            <li>
              <CheckCircle2 className="check-icon" size={24} fill="#10b981" color="white" />
              <span>Festival ready meal & workout plans</span>
            </li>
            <li>
              <CheckCircle2 className="check-icon" size={24} fill="#10b981" color="white" />
              <span>Doctor referral when something seems serious</span>
            </li>
          </ul>

          <button className="btn-meet-ai">
            Meet AI Saathi <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AISaathi;
