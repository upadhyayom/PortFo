import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const worksData = [
  {
    name: 'Myzon',
    description: 'An E-com site',
    image: './Image/ama1.png', // Replace with actual image path
  },
  {
    name: 'Trip_Assist',
    description: 'A tour guide',
    image: './Image/trip1.png', // Replace with actual image path
  },
  {
    name: 'E-com',
    description: 'Mobile App',
    image: './Image/ecom1.png', // Replace with actual image path
  },
];

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10%', marginTop: '20%' }}>
      <div style={{ zIndex: '2', height: '100%', width: 'auto' }}>
        <Slider {...settings}>
          {worksData.map((work) => (
            <div key={work.name}>
              {/* Use Link component to navigate to the product details page */}
              <Link to={`/product/${work.name}`}>
                <h1 style={{ color: 'white', textDecoration: 'none', fontSize: '7vw' }}>{work.name}</h1>
                <p style={{ color: 'red' }}>{work.description}</p>
                <img src={work.image} alt={work.name} style={{ width: '100%', height: 'auto' }} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          background: '#1E1E1E',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: '1',
        }}
      >
        <div>
          <Link to="/" style={{ color: '#fff', fontSize: '1.8vw', textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
            Home
          </Link>
          <Link to="/work" style={{ color: '#fff', fontSize: '1.8vw', textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
            My Work
          </Link>
          <Link to="/contact" style={{ color: '#fff', fontSize: '1.8vw', textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
