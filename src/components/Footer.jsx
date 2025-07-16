import React from 'react';

const Footer = () => {
    // Get the current year dynamically for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <section className="footer">
            <div className="box-container container">
                <div className="box">
                    <i className="fas fa-phone"></i>
                    <h3>Phone number</h3>
                    <p>+91 7730882637</p>
                    <p>+91 9908945408</p>
                </div>
                <div className="box">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>our address</h3>
                    <p>Tiruchirappalli, India - 620012</p>
                </div>
                <div className="box">
                    <i className="fas fa-clock"></i>
                    <h3>opening hours</h3>
                    <p>09:00am to 10:00pm</p>
                </div>
                <div className="box">
                    <i className="fas fa-envelope"></i>
                    <h3>email address</h3>
                    <p>dhansuhramavath1712@gmail.com</p>
                    <p>agndagnd000@gmail.com</p>
                </div>
            </div>
            {/* Display the current year dynamically */}
            <div className="credit"> &copy; Copyright by <span>{currentYear} - Ramavathu Dhanush Naik</span></div>
        </section>
    );
};

export default Footer;