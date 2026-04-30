import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ChevronDown, Star } from 'lucide-react';
import './PricingPage.css';

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is the free plan really free?",
      answer: "Yes, the core features of HealthSaathi including basic diet tracking and steps counting are completely free forever."
    },
    {
      question: "Can I switch plans anytime?",
      answer: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time right from the app settings."
    },
    {
      question: "Do you accept UPI?",
      answer: "Yes, we accept all major UPI apps including Google Pay, PhonePe, Paytm, and Amazon Pay."
    },
    {
      question: "Is my data safe?",
      answer: "We take privacy seriously. Your health data is end-to-end encrypted and we never sell your personal information to third parties."
    }
  ];

  return (
    <div className="pricing-page">
      {/* Pricing Header & Cards */}
      <section className="pricing-section">
        <div className="pricing-header">
          <h1>Made for Indian budgets.</h1>
          <p>No hidden fees. UPI accepted. Cancel anytime.</p>
        </div>

        <div className="pricing-grid">
          {/* Free Plan */}
          <div className="pricing-card">
            <h3 className="plan-name">Free</h3>
            <p className="plan-desc">Perfect to start</p>
            <div className="plan-price">
              <span className="currency">₹</span>
              <span className="amount">0</span>
              <span className="duration">/forever</span>
            </div>
            <button className="btn-plan btn-dark">Start Free</button>
            
            <div className="plan-divider"></div>
            
            <ul className="plan-features">
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Diet & water tracking</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Step counter</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>10 AI chats / day</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Basic reports</span></li>
            </ul>
          </div>

          {/* Saathi Plus Plan */}
          <div className="pricing-card highlighted-card">
            <div className="most-popular-badge">
              <Star size={12} fill="white" /> MOST POPULAR
            </div>
            <h3 className="plan-name">Saathi Plus</h3>
            <p className="plan-desc">Most popular</p>
            <div className="plan-price">
              <span className="currency">₹</span>
              <span className="amount">149</span>
              <span className="duration">/month</span>
            </div>
            <button className="btn-plan btn-green">Try 7 days free</button>
            
            <div className="plan-divider"></div>
            
            <ul className="plan-features">
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Everything in Free</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Unlimited AI Saathi</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Personalised meal plans</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Advanced reports + export</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Priority support</span></li>
            </ul>
          </div>

          {/* Family Plan */}
          <div className="pricing-card">
            <h3 className="plan-name">Family</h3>
            <p className="plan-desc">For 5 people</p>
            <div className="plan-price">
              <span className="currency">₹</span>
              <span className="amount">349</span>
              <span className="duration">/month</span>
            </div>
            <button className="btn-plan btn-dark">Choose Family</button>
            
            <div className="plan-divider"></div>
            
            <ul className="plan-features">
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Up to 5 members</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Everything in Plus</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Shared meal planning</span></li>
              <li><CheckCircle2 size={16} color="#10b981" /> <span>Doctor consultation × 2</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payments-section">
        <span className="payments-label">We accept</span>
        <div className="payment-methods">
          <span className="payment-pill">UPI</span>
          <span className="payment-pill">Visa</span>
          <span className="payment-pill">Mastercard</span>
          <span className="payment-pill">RuPay</span>
          <span className="payment-pill">Paytm</span>
          <span className="payment-pill">PhonePe</span>
          <span className="payment-pill">Net Banking</span>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently asked</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                {openFaq === index ? (
                  <ChevronDown size={20} className="chevron" />
                ) : (
                  <ChevronRight size={20} className="chevron" />
                )}
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
