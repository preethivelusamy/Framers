// src/pages/SportsGlassesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SportsGlassesPage.css';

const sportsGlasses = [
    {
        id: 1,
        name: 'Sports Glasses A',
        image: 'https://via.placeholder.com/150',
        description: 'Lightweight and durable sports glasses for outdoor activities.',
        price: '$40',
        company: 'Sports Co.',
        deliveryDate: '2024-10-29',
    },
    {
        id: 2,
        name: 'Sports Glasses B',
        image: 'https://via.placeholder.com/150',
        description: 'Perfect for cycling and running, offers maximum protection.',
        price: '$45',
        company: 'Cycling Gear',
        deliveryDate: '2024-10-28',
    },
    {
        id: 3,
        name: 'Sports Glasses C',
        image: 'https://via.placeholder.com/150',
        description: 'Trendy sports glasses that combine style and functionality.',
        price: '$50',
        company: 'Trend Setters',
        deliveryDate: '2024-10-31',
    },
    {
        id: 4,
        name: 'Sports Glasses D',
        image: 'https://via.placeholder.com/150',
        description: 'Durable glasses designed for extreme sports enthusiasts.',
        price: '$55',
        company: 'Extreme Sports',
        deliveryDate: '2024-11-02',
    },
    {
        id: 5,
        name: 'Sports Glasses E',
        image: 'https://via.placeholder.com/150',
        description: 'High-performance glasses for outdoor sports.',
        price: '$60',
        company: 'Outdoor Vision',
        deliveryDate: '2024-11-03',
    },
    {
        id: 6,
        name: 'Sports Glasses F',
        image: 'https://via.placeholder.com/150',
        description: 'Rugged glasses for all-day comfort during sports.',
        price: '$65',
        company: 'Active Gear',
        deliveryDate: '2024-11-04',
    },
    {
        id: 7,
        name: 'Sports Glasses G',
        image: 'https://via.placeholder.com/150',
        description: 'Innovative design with UV protection.',
        price: '$70',
        company: 'Protective Eyewear',
        deliveryDate: '2024-11-05',
    },
    {
        id: 8,
        name: 'Sports Glasses H',
        image: 'https://via.placeholder.com/150',
        description: 'Sleek design with enhanced vision.',
        price: '$75',
        company: 'Vision Sports',
        deliveryDate: '2024-11-06',
    },
    {
        id: 9,
        name: 'Sports Glasses I',
        image: 'https://via.placeholder.com/150',
        description: 'Comfortable fit for long-duration wear.',
        price: '$80',
        company: 'Endurance Gear',
        deliveryDate: '2024-11-07',
    },
    {
        id: 10,
        name: 'Sports Glasses J',
        image: 'https://via.placeholder.com/150',
        description: 'Dynamic style with excellent grip.',
        price: '$85',
        company: 'Grip Gear',
        deliveryDate: '2024-11-08',
    },
    {
        id: 11,
        name: 'Sports Glasses K',
        image: 'https://via.placeholder.com/150',
        description: 'Versatile sports glasses for various activities.',
        price: '$90',
        company: 'Versatile Eyewear',
        deliveryDate: '2024-11-09',
    },
    {
        id: 12,
        name: 'Sports Glasses L',
        image: 'https://via.placeholder.com/150',
        description: 'Lightweight and stylish for sports enthusiasts.',
        price: '$95',
        company: 'Sporty Style',
        deliveryDate: '2024-11-10',
    },
];

const SportsGlassesPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleOrderClick = (glass) => {
        // Navigate to order page and pass the product data
        navigate('/order', { state: { product: glass } });
    };

    const handleTryOnClick = (glass) => {
        // Navigate to virtual try-on page and pass the product data
        navigate('/virtual-try-on', { state: { product: glass } });
    };

    return (
        <div className="sports-glasses-page">
            <h1>Sports Glasses Collection</h1>
            <p>Discover our range of sports eyewear!</p>
            <div className="sports-glasses-list">
                {sportsGlasses.map(glass => (
                    <div key={glass.id} className="sports-glass-card">
                        <img src={glass.image} alt={glass.name} />
                        <h2>{glass.name}</h2>
                        <p>{glass.description}</p>
                        <p>Price: {glass.price}</p>
                        <p>Company: {glass.company}</p>
                        <p>Delivery Date: {glass.deliveryDate}</p>
                        <div className="button-group">
                            <button onClick={() => handleOrderClick(glass)}>Order Now</button>
                            <button onClick={() => handleTryOnClick(glass)}>Try On</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportsGlassesPage;
