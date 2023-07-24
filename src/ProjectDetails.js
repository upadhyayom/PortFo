import React from 'react';
import { useParams, Link } from 'react-router-dom';

const productsData = {
  Myzon: {
    appHeading: 'Myzon',
    appDescription: 'An E-com site',
    appImage: './Image/ama1.png',
    carouselDescription: 'Description for Myzon carousel.',
    carouselImages: ['./Image/ama1.png', './Image/ama2.png', './Image/ama3.png'],
  },
  Trip_Assist: {
    appHeading: 'Trip_Assist',
    appDescription: 'A tour guide',
    appImage: './Image/trip1.png',
    carouselDescription: 'Description for Trip_Assist carousel.',
    carouselImages: ['./Image/trip1.png', './Image/trip2.png', './Image/trip3.png'],
  },
  Ecom: {
    appHeading: 'E-com',
    appDescription: 'Mobile App',
    appImage: './Image/ecom1.png',
    carouselDescription: 'Description for Ecom carousel.',
    carouselImages: ['./Image/ecom1.png', './Image/ecom2.png', './Image/ecom3.png'],
  },
};

const ProductDetails = () => {
  const { productName } = useParams();
  const data = productsData[productName];

  if (!data) {
    return <div style={{ color: 'white', fontSize: '3vw' }}>Product not found.</div>;
  }

  return (
    <div className="product-container">
      <h1>{data.appHeading}</h1>
      <p>{data.appDescription}</p>
      <img src={data.appImage} alt="App Image" className="app-image" />
      <h1>{data.appHeading}</h1>
      <p>{data.carouselDescription}</p>
      <div className="carousel-container">
        {data.carouselImages.map((image, index) => (
          <img key={index} src={image} alt={`Carousel Image ${index + 1}`} />
        ))}
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

export default ProductDetails;
