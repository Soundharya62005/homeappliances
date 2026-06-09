import React from "react";
import { Link } from 'react-router-dom'
import "./Contact.css";
import Home from "./Home";

const Contact = () => {
    return (

        <>

        <Home />
        <div className="contact-page">

            {/* Hero Section */}
            <div className="hero">
                {/* <h1>Contact Us</h1> */}
                <p>We would love to hear from you</p>
            </div>

            {/* Main Section */}
            <div className="contact-container">

                {/* Left Image */}
                <div className="contact-image"></div>

                {/* Right Form */}
                <div className="contact-form">
                    <h2>Get in Touch</h2>

                    <div className="info">
                        <p>📍 Chennai, India</p>
                        <p>📞 +91 98765 43210</p>
                        <p>✉️ contact@yourwebsite.com</p>
                    </div>

                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>

                    <button>Send Message</button>
                </div>

            </div>
            </div>

            {/* Footer */}
            <footer className="footer">
        <div className="footer-container">

          <div className="footer-box">
            <h3>KS Home Appliances</h3>
            <p>Smart solutions for modern homes.</p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
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
            <h3>Contact</h3>
            <p>Email: support@kshome.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: India</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 KS Home Appliances</p>
        </div>
      </footer>

        
        </>
    );
};

export default Contact;