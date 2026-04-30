import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="stats-container">
          <div className="stat-item">
            <h3>4.2L+</h3>
            <p>ACTIVE INDIANS</p>
          </div>
          <div className="stat-item">
            <h3>92%</h3>
            <p>HIT WEEKLY GOALS</p>
          </div>
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>INDIAN DISHES</p>
          </div>
          <div className="stat-item">
            <h3>4.8★</h3>
            <p>ON PLAY STORE</p>
          </div>
        </div>
      </div>

      {/* Testimonials Content */}
      <div className="testimonials-content">
        <div className="test-header">
          <div className="test-kicker">FROM REAL USERS</div>
          <h2 className="test-title">Stories from across India</h2>
        </div>

        <div className="testimonials-grid">
          {/* Card 1 */}
          <div className="test-card">
            <div className="test-stars">
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
            </div>
            <Quote size={32} className="quote-icon" color="#a7f3d0" />
            <p className="test-text">
              Finally an app that understands roti and dal! Lost 6 kg in 4 months without any crash diet.
            </p>
            <hr className="test-divider" />
            <div className="test-author">
              <img src="https://i.pravatar.cc/100?img=5" alt="Priya Sharma" />
              <div className="author-info">
                <h4>Priya Sharma</h4>
                <p>Delhi · Teacher</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="test-card">
            <div className="test-stars">
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
            </div>
            <Quote size={32} className="quote-icon" color="#a7f3d0" />
            <p className="test-text">
              AI Saathi answers in Hinglish exactly how I think. My diabetes is finally under control.
            </p>
            <hr className="test-divider" />
            <div className="test-author">
              <img src="https://i.pravatar.cc/100?img=11" alt="Rahul Verma" />
              <div className="author-info">
                <h4>Rahul Verma</h4>
                <p>Pune · Engineer</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="test-card">
            <div className="test-stars">
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
            </div>
            <Quote size={32} className="quote-icon" color="#a7f3d0" />
            <p className="test-text">
              Easy enough for my mother-in-law to use. She tracks her walks every day now.
            </p>
            <hr className="test-divider" />
            <div className="test-author">
              <img src="https://i.pravatar.cc/100?img=42" alt="Meera Iyer" />
              <div className="author-info">
                <h4>Meera Iyer</h4>
                <p>Bangalore · Mother</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
