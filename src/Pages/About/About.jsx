import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>📱 Welcome to <span className="brand-name">Phone Verse</span></h1>
        <p>
          At <strong>Phone Verse</strong>, we are passionate about bringing you the
          <strong> latest smartphones, accessories, and unbeatable deals</strong> all under one roof. 
          Our mission is to make cutting-edge mobile technology 
          <strong> affordable, accessible, and hassle-free</strong> for everyone.
        </p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ <strong>Top-Quality Products</strong> – Original and reliable devices from trusted brands.</li>
          <li>✅ <strong>Competitive Prices</strong> – Unmatched deals and discounts.</li>
          <li>✅ <strong>Excellent Customer Service</strong> – Our team is here to assist you every step of the way.</li>
          <li>✅ <strong>Fast & Secure Delivery</strong> – Get your device delivered to your doorstep with ease.</li>
        </ul>

        <p>
          Explore our store, discover great deals, and experience <strong>technology like never before</strong>.
        </p>

        <div className="about-contact">
          <p><strong>📞 Contact Us:</strong> For any inquiries, feel free to <Link to="/contact">get in touch</Link> with our friendly team.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
