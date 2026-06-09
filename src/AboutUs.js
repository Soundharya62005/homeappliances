import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './AboutUs.css';

import img1 from './homeapp.jpg';
import img2 from './onlineshop.jpg';
import img3 from './custservice.jpg';
import img4 from './abtdelivery.jpg';

import Home from './Home';

function About() {
  return (
    <>
      <Home />

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Making Your Home Smarter & Comfortable</h1>
          <p>Premium Appliances Designed For Modern Living</p>
        </div>
      </section>

      <div className="about-container">

        {/* ABOUT SECTION */}
        <section className="about-content">

          <div className="about-image">
            <img src={img1} alt="Home Appliances" />
          </div>

          <div className="about-text">

            <h2>About KS Home Appliances</h2>

            <p>
              At <strong>KS Home Appliances</strong>, we bring innovation and
              convenience into your home. Our products are carefully selected
              to ensure performance, durability and modern design.
            </p>

            <p>
              Whether it's your kitchen, living room or entire home, we provide
              solutions that simplify your lifestyle and save your valuable time.
            </p>

            <div className="about-highlights">

              <div className="highlight-box">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="highlight-box">
                <h3>5000+</h3>
                <p>Happy Customers</p>
              </div>

              <div className="highlight-box">
                <h3>100+</h3>
                <p>Products</p>
              </div>

            </div>

          </div>

        </section>

        {/* MISSION & VISION */}
        <section className="mission-vision">

          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To provide affordable and innovative appliances
              that improve everyday living for every household.
            </p>
          </div>

          <div className="vision-box">
            <h3>Our Vision</h3>
            <p>
              To become India's most trusted home appliance
              brand known for quality and customer service.
            </p>
          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us">

          <h2>Why Choose Us?</h2>

          <div className="features">

            <div className="feature-card">
              ✔ Trusted Brands
            </div>

            <div className="feature-card">
              ✔ Affordable Pricing
            </div>

            <div className="feature-card">
              ✔ Fast Delivery
            </div>

            <div className="feature-card">
              ✔ Premium Quality
            </div>

            <div className="feature-card">
              ✔ 24/7 Customer Support
            </div>

            <div className="feature-card">
              ✔ Easy Returns
            </div>

          </div>

        </section>

        {/* SERVICES GALLERY */}
        <section className="about-gallery">

          <h2>Our Services</h2>

          <div className="gallery-grid">

            <div className="gallery-card">
              <img src={img2} alt="Online Shopping" />
              <h4>Online Shopping</h4>
            </div>

            <div className="gallery-card">
              <img src={img3} alt="Customer Service" />
              <h4>Customer Support</h4>
            </div>

            <div className="gallery-card">
              <img src={img4} alt="Fast Delivery" />
              <h4>Fast Delivery</h4>
            </div>

          </div>

        </section>

      </div>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-box">

            <h3>KS Home Appliances</h3>

            <p>
              Smart solutions for modern homes.
            </p>

            <div className="social-icons">

              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>

            </div>

          </div>

          <div className="footer-box">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/AboutUs">About</Link>
            <Link to="/Samproduct">Products</Link>
            <Link to="/Contact">Contact</Link>

          </div>

          <div className="footer-box">

            <h3>Contact Us</h3>

            <p>Email: support@kshome.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Salem, Tamil Nadu, India</p>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 KS Home Appliances. All Rights Reserved.</p>
        </div>

      </footer>
    </>
  );
}

export default About;