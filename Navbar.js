// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Importing CSS for Navbar

// const Navbar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/products">Products</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//                 <li><Link to="/virtual-try-on">Virtual Try-On</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing CSS for Navbar

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/sunglasses">Sunglasses</Link></li> {/* Link to Sunglasses Page */}
                <li><Link to="/reading-glasses">Reading Glasses</Link></li> {/* Link to Reading Glasses Page */}
                <li><Link to="/sports-glasses">Sports Glasses</Link></li> {/* Link to Sports Glasses Page */}
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/virtual-try-on">Virtual Try-On</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
