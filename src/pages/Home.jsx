import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import AISaathi from '../components/AISaathi/AISaathi';
import Testimonials from '../components/Testimonials/Testimonials';
import CallToAction from '../components/CallToAction/CallToAction';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <HowItWorks />
      <AISaathi />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
