import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Create this CSS file for styling

const Contact = () => {
  return (
    <div>
      <div className="sidebar-container">
        <Link to="/" className="sidebar-link">
          Home
        </Link>
        <Link to="/about" className="sidebar-link">
          About Me
        </Link>
        <Link to="/work" className="sidebar-link">
          Work
        </Link>
      </div>
      <div className="contact-container">
        <h1 className="main-title">Let's get Connected🤗</h1>
        <div className="contact-details">
          <h3 className="slide-in">Drop me a Mail📧</h3>
          <h3 className="slide-in">LinkedIn</h3>
          <a href='https://wa.me/9477440662' target='_blank' rel="noopener noreferrer">
            <h3 className="slide-in">Whatsapp Me</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
