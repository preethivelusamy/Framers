// src/pages/OrderPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderPage.css'; // Optional: Create a CSS file for styling

const OrderPage = () => {
    const location = useLocation();
    const product = location.state?.product; // Get the product data from state

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleOrderNow = () => {
        // Handle order submission logic here
        console.log('Order placed:', { name, phone, email, address, product });
        alert('Order placed successfully!');
    };

    return (
        <div className="order-page">
            <h1>Order Details</h1>
            <h2>Selected Glasses:</h2>
            {product && (
                <div className="product-details">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                    <p>Company: {product.company}</p>
                    <p>Delivery Date: {product.deliveryDate}</p>
                </div>
            )}
            <h2>Enter Your Details:</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleOrderNow(); }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Order Now</button>
            </form>
        </div>
    );
};

export default OrderPage;
