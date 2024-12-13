// src/pages/ProductPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const products = [
    {
        id: 1,
        name: 'Sunglasses A',
        image: '/images/s1.png',
        description: 'Stylish sunglasses to protect your eyes from the sun.',
        link: '/sunglasses'
    },
    {
        id: 2,
        name: 'Reading Glasses B',
        image: '/images/r1.png',
        description: 'Perfect for reading and working on computers.',
        link: '/reading-glasses'
    },
    {
        id: 3,
        name: 'Sports Glasses C',
        image: '/images/sp1.png',
        description: 'Durable glasses for sports enthusiasts.',
        link: '/sports-glasses', // Link to Sports Glasses page
    },
    {
        id: 4,
        name: 'Fashion Glasses D',
        image: '/images/f1.png',
        description: 'Trendy glasses that enhance your style.',
        link: '/fashion-glasses', // Add link to the fashion glasses page
    },
];

const ProductPage = () => {
    return (
        <div className="product-page">
            <h1>Product Page</h1>
            <p>Explore our collection of eyewear products!</p>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <Link to={product.link || '#'}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
