import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProjectDetails'; // Corrected import statement
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Myzon from './Myzon';
import Trip from './Trip';
import Ecom from './Ecom';

const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/myzon" element={<Myzon />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/ecom" element={<Ecom />} />
        <Route path="/product/:productName" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default Page;
