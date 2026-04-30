import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import './ContactPage.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="kicker">GET IN TOUCH</div>
        <h1>We'd love to hear from you.</h1>
        <p>Questions, feedback, partnerships — drop us a line.</p>
      </section>

      {/* Content Section */}
      <section className="contact-content">
        <div className="contact-container">
          
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="icon-circle green">
                <Mail size={20} color="#10b981" />
              </div>
              <div className="info-text">
                <span className="info-label">EMAIL US</span>
                <span className="info-value">saathi@healthsaathi.in</span>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle blue">
                <Phone size={20} color="#3b82f6" />
              </div>
              <div className="info-text">
                <span className="info-label">CALL US</span>
                <span className="info-value">+91 80 4567 8900</span>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle light-green">
                <MessageCircle size={20} color="#22c55e" />
              </div>
              <div className="info-text">
                <span className="info-label">WHATSAPP</span>
                <span className="info-value">+91 98765 43210</span>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle orange">
                <MapPin size={20} color="#f97316" />
              </div>
              <div className="info-text">
                <span className="info-label">VISIT US</span>
                <span className="info-value">Indiranagar, Bengaluru 560038</span>
              </div>
            </div>

            <div className="response-time-card">
              <span className="response-label">RESPONSE TIME</span>
              <span className="response-value">~2 hours</span>
              <span className="response-hours">Mon-Sat - 9 AM - 9 PM IST</span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>FULL NAME</label>
                  <input type="text" placeholder="Priya Sharma" />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input type="email" placeholder="priya@example.in" />
                </div>
              </div>

              <div className="form-group">
                <label>SUBJECT</label>
                <select defaultValue="General enquiry">
                  <option value="General enquiry">General enquiry</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>MESSAGE</label>
                <textarea rows="5" placeholder="Hi! I'd love to learn more about the app..."></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send message <ArrowRight size={16} />
              </button>
              <span className="form-footer-text">We'll reply within 2 hours.</span>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
