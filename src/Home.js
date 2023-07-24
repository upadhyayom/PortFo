import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  // State variables to control hover effects for each heading
  const [showHelloHover, setShowHelloHover] = useState(false);
  const [showImHover, setShowImHover] = useState(false);
  const [showOmHover, setShowOmHover] = useState(false);

  // Event handlers for 'Hello' heading hover effect
  const handleHelloMouseEnter = () => {
    setShowHelloHover(true);
  };

  const handleHelloMouseLeave = () => {
    setShowHelloHover(false);
  };

  // Event handlers for "I'm" heading hover effect
  const handleImMouseEnter = () => {
    setShowImHover(true);
  };

  const handleImMouseLeave = () => {
    setShowImHover(false);
  };

  // Event handlers for "Om Upadhyay" heading hover effect
  const handleOmMouseEnter = () => {
    setShowOmHover(true);
  };

  const handleOmMouseLeave = () => {
    setShowOmHover(false);
  };

  return (
    <div
      className="Headings"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        marginLeft: '5%',
        height: '100vh',
      }}
    >
      <div style={{ flex: '1', position: 'relative', zIndex: '1', textAlign: 'center' }}>
        {/* 'Hello' Heading with hover effect */}
        <Link to="/work" style={{ textDecoration: 'none' }}>
          <h1
            style={{
              color: showHelloHover ? 'red' : 'white',
              margin: '10px 0',
              zIndex: '1',
              fontSize: '8vw', // Use relative font size for responsiveness
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
            }}
            className={showHelloHover ? 'label-hello animate' : 'label-hello'}
            onMouseEnter={handleHelloMouseEnter}
            onMouseLeave={handleHelloMouseLeave}
          >
            {showHelloHover ? 'WORKS' : 'Hello!'}
          </h1>
        </Link>
        {/* "I'm" Heading with hover effect */}
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <h1
            style={{
              color: showImHover ? 'red' : 'white',
              margin: '10px 0',
              zIndex: '1',
              fontSize: '8vw', // Use relative font size for responsiveness
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
            }}
            className={showImHover ? 'label-iam animate' : 'label-iam'}
            onMouseEnter={handleImMouseEnter}
            onMouseLeave={handleImMouseLeave}
          >
            {showImHover ? 'About' : "I'm"}
          </h1>
        </Link>
        {/* "Om Upadhyay" Heading with hover effect */}
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <h1
            style={{
              color: showOmHover ? 'red' : 'white',
              margin: '10px 0',
              zIndex: '1',
              fontSize: '8vw', // Use relative font size for responsiveness
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
            }}
            className={showOmHover ? 'label-dejan animate' : 'label-dejan'}
            onMouseEnter={handleOmMouseEnter}
            onMouseLeave={handleOmMouseLeave}
          >
            {showOmHover ? 'Contact' : 'Om Upadhyay'}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
