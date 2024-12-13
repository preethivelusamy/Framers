// // src/pages/HomePage.js
// import React from 'react';
// import './HomePage.css'; // Import the CSS for styling

// const HomePage = () => {
//     return (
//         <div className="home-page">
//             <h1>Welcome to Lenskart Clone</h1>
//             <p>
//                 This is the homepage. Browse our collection of eyewear and try on your favorites virtually!
//             </p>
//             <button className="explore-button">Explore Products</button>
//         </div>
//     );
// };

// export default HomePage;

// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css'; // Import the CSS for styling

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Framers</h1>
            <p>
                Browse our collection of eyewear and try on your favorites virtually!
            </p>
            <Link to="/products"> {/* Wrap the button in a Link to navigate */}
                <button className="explore-button">Explore Products</button>
            </Link>
        </div>
    );
};

export default HomePage;

