// src/pages/FashionGlassesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './FashionGlassesPage.css'; // CSS file for styling

const fashionGlasses = [
    {
        id: 1,
        name: 'Fashion Glasses A',
        image: 'https://via.placeholder.com/150',
        description: 'Trendy fashion glasses to elevate your style.',
        price: '$60',
        company: 'Fashion Co.',
        deliveryDate: '2024-10-30',
    },
    {
        id: 2,
        name: 'Fashion Glasses B',
        image: 'https://via.placeholder.com/150',
        description: 'Chic glasses that make a statement.',
        price: '$65',
        company: 'Chic Styles',
        deliveryDate: '2024-10-31',
    },
    {
        id: 3,
        name: 'Fashion Glasses C',
        image: 'https://via.placeholder.com/150',
        description: 'Sleek designs for modern aesthetics.',
        price: '$70',
        company: 'Modern Looks',
        deliveryDate: '2024-11-01',
    },
    {
        id: 4,
        name: 'Fashion Glasses D',
        image: 'https://via.placeholder.com/150',
        description: 'Bold and stylish glasses for fashion lovers.',
        price: '$75',
        company: 'Bold Fashion',
        deliveryDate: '2024-11-02',
    },
    {
        id: 5,
        name: 'Fashion Glasses E',
        image: 'https://via.placeholder.com/150',
        description: 'Elegant glasses with a sophisticated touch.',
        price: '$80',
        company: 'Elegant Vision',
        deliveryDate: '2024-11-03',
    },
    {
        id: 6,
        name: 'Fashion Glasses F',
        image: 'https://via.placeholder.com/150',
        description: 'Stylish frames for any occasion.',
        price: '$85',
        company: 'Style Hub',
        deliveryDate: '2024-11-04',
    },
    {
        id: 7,
        name: 'Fashion Glasses G',
        image: 'https://via.placeholder.com/150',
        description: 'Retro-inspired frames for a classic look.',
        price: '$90',
        company: 'Retro Vibes',
        deliveryDate: '2024-11-05',
    },
    {
        id: 8,
        name: 'Fashion Glasses H',
        image: 'https://via.placeholder.com/150',
        description: 'Lightweight and fashionable eyewear.',
        price: '$95',
        company: 'Lightweight Optics',
        deliveryDate: '2024-11-06',
    },
    {
        id: 9,
        name: 'Fashion Glasses I',
        image: 'https://via.placeholder.com/150',
        description: 'Designer glasses for the fashion-forward.',
        price: '$100',
        company: 'Designer Frames',
        deliveryDate: '2024-11-07',
    },
    {
        id: 10,
        name: 'Fashion Glasses J',
        image: 'https://via.placeholder.com/150',
        description: 'Casual frames for everyday wear.',
        price: '$55',
        company: 'Casual Styles',
        deliveryDate: '2024-11-08',
    },
    {
        id: 11,
        name: 'Fashion Glasses K',
        image: 'https://via.placeholder.com/150',
        description: 'Colorful frames that stand out.',
        price: '$50',
        company: 'Colorful Creations',
        deliveryDate: '2024-11-09',
    },
    {
        id: 12,
        name: 'Fashion Glasses L',
        image: 'https://via.placeholder.com/150',
        description: 'Premium quality glasses for discerning customers.',
        price: '$110',
        company: 'Premium Vision',
        deliveryDate: '2024-11-10',
    },
];

const FashionGlassesPage = () => {
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
        <div className="fashion-glasses-page">
            <h1>Fashion Glasses</h1>
            <p>Explore our stylish collection of fashion glasses!</p>
            <div className="fashion-glasses-list">
                {fashionGlasses.map(glass => (
                    <div key={glass.id} className="fashion-glass-card">
                        <img src={glass.image} alt={glass.name} />
                        <h2>{glass.name}</h2>
                        <p>{glass.description}</p>
                        <p>Price: {glass.price}</p>
                        <p>Company: {glass.company}</p>
                        <p>Delivery Date: {glass.deliveryDate}</p>
                        <div className="button-group">
                            {/* Button to order the fashion glass */}
                            <button onClick={() => handleOrderClick(glass)} className="order-button">
                                Order Now
                            </button>
                            {/* Button for trying on the fashion glass */}
                            <button onClick={() => handleTryOnClick(glass)} className="try-on-button">
                                Try On
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FashionGlassesPage;
