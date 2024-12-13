import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SunglassesPage.css';

const sunglasses = [
    {
        id: 1,
        name: 'Sunglass 1',
        image: '/images/sun/sa.png',
        description: 'Stylish sunglasses perfect for summer.',
        price: '$30',
        company: 'Summer Shades',
        deliveryDate: '2024-10-28',
    },
    {
        id: 2,
        name: 'Sunglass 2',
        image: '/images/sun/sb.png',
        description: 'Classic aviators for a timeless look.',
        price: '$35',
        company: 'Aviator Co.',
        deliveryDate: '2024-10-29',
    },
    {
        id: 3,
        name: 'Sunglass 3',
        image: '/images/sun/sc.png',
        description: 'Sporty sunglasses for outdoor adventures.',
        price: '$40',
        company: 'Adventure Gear',
        deliveryDate: '2024-10-31',
    },
    {
        id: 4,
        name: 'Sunglass 4',
        image: '/images/sun/sd.png',
        description: 'Elegant sunglasses with a touch of class.',
        price: '$50',
        company: 'Elegance Eyewear',
        deliveryDate: '2024-11-01',
    },
    {
        id: 5,
        name: 'Sunglass 5',
        image: '/images/sun/se.png',
        description: 'Stylish round sunglasses for a retro look.',
        price: '$32',
        company: 'Retro Vision',
        deliveryDate: '2024-11-02',
    },
    {
        id: 6,
        name: 'Sunglass 6',
        image: '/images/sun/sf.png',
        description: 'Polarized sunglasses for glare reduction.',
        price: '$45',
        company: 'Polarized Pros',
        deliveryDate: '2024-11-03',
    },
    {
        id: 7,
        name: 'Sunglass 7',
        image: '/images/sun/sg.png',
        description: 'Trendy cat-eye sunglasses for fashionistas.',
        price: '$60',
        company: 'Fashion House',
        deliveryDate: '2024-11-04',
    },
    {
        id: 8,
        name: 'Sunglass 8',
        image: '/images/sun/sh.png',
        description: 'Futuristic sunglasses with a sleek design.',
        price: '$55',
        company: 'Futuristic Frames',
        deliveryDate: '2024-11-05',
    },
    {
        id: 9,
        name: 'Sunglass 9',
        image: '/images/sun/si.png',
        description: 'Durable sunglasses for extreme conditions.',
        price: '$70',
        company: 'Adventure Eyewear',
        deliveryDate: '2024-11-06',
    },
    {
        id: 10,
        name: 'Sunglass 10',
        image: '/images/sun/sj.png',
        description: 'Luxury sunglasses for a high-end experience.',
        price: '$100',
        company: 'Luxury Eyewear',
        deliveryDate: '2024-11-07',
    },
    {
        id: 11,
        name: 'Sunglass 11',
        image: '/images/sun/sk.png',
        description: 'Stylish oversized sunglasses for sun protection.',
        price: '$65',
        company: 'Oversized Co.',
        deliveryDate: '2024-11-08',
    },
    {
        id: 12,
        name: 'Sunglass 12',
        image: '/images/sun/sl.png',
        description: 'Sporty wrap-around sunglasses for athletes.',
        price: '$80',
        company: 'Athlete Gear',
        deliveryDate: '2024-11-09',
    },
];

const SunglassesPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleOrderClick = (glass) => {
        // Navigate to order page and pass the product data
        navigate('/order', { state: { product: glass } });
    };

    const handleTryOnClick = (glass) => {
        // Navigate to the Virtual Try-On page and pass the selected glass data
        navigate('/virtual-try-on', { state: { product: glass } });
    };

    return (
        <div className="sunglasses-page">
            <h1>Sunglasses Collection</h1>
            <p>Discover our stylish range of sunglasses!</p>
            <div className="sunglasses-list">
                {sunglasses.map(glass => (
                    <div key={glass.id} className="sunglass-card">
                        <img src={glass.image} alt={glass.name} />
                        <h2>{glass.name}</h2>
                        <p>{glass.description}</p>
                        <p>Price: {glass.price}</p>
                        <p>Company: {glass.company}</p>
                        <p>Delivery Date: {glass.deliveryDate}</p>
                        <div className="button-group">
                            <button onClick={() => handleOrderClick(glass)}>Order Now</button>
                            <button onClick={() => handleTryOnClick(glass)}>Try On</button> {/* Pass glass data to Try-On button */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SunglassesPage;
