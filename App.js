import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import VirtualTryOnPage from './pages/VirtualTryOnPage';
import SunglassesPage from './pages/SunglassesPage';
import ReadingGlassesPage from './pages/ReadingGlassesPage';
import SportsGlassesPage from './pages/SportsGlassesPage';
import FashionGlassesPage from './pages/FashionGlassesPage';
import OrderPage from './pages/OrderPage'; // Import the OrderPage
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/virtual-try-on">Virtual Try-On</Link></li>
          {/* <li><Link to="/sunglasses">Sunglasses</Link></li>
          <li><Link to="/reading-glasses">Reading Glasses</Link></li>
          <li><Link to="/sports-glasses">Sports Glasses</Link></li>
          <li><Link to="/fashion-glasses">Fashion Glasses</Link></li> */}
          <li><Link to="/order">Orders</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/virtual-try-on" element={<VirtualTryOnPage />} />
        <Route path="/sunglasses" element={<SunglassesPage />} />
        <Route path="/reading-glasses" element={<ReadingGlassesPage />} />
        <Route path="/sports-glasses" element={<SportsGlassesPage />} />
        <Route path="/fashion-glasses" element={<FashionGlassesPage />} />
        <Route path="/order" element={<OrderPage />} /> {/* Route for OrderPage */}
      </Routes>
    </Router>
  );
};

export default App;
