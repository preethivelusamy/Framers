import React from 'react';
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="contact-page"> {/* Add a class to the main div */}
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Address:</label>
        <textarea />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
