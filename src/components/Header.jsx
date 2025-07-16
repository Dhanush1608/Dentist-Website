import React, { useState, useEffect } from 'react';

const Header = () => {
    // State to manage if the mobile menu is open/closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to manage if the header should have the 'active' class (for scrolling effect)
    const [isScrolled, setIsScrolled] = useState(false);

    // Function to toggle the menu open/closed
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to check scroll position for header styling
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    // Effect hook to add and remove scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

    // Function to close the menu when a navigation link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header fixed-top ${isScrolled ? 'active' : ''}`}>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <a href="#home" className="logo" onClick={closeMenu}>
                        precision <span>dental.</span> 
                    </a>
                    {/* Apply 'active' class based on isMenuOpen state */}
                    <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#home" onClick={closeMenu}>home</a>
                        <a href="#about" onClick={closeMenu}>about</a>
                        <a href="#services" onClick={closeMenu}>services</a>
                        <a href="#reviews" onClick={closeMenu}>reviews</a>
                        <a href="#contact" onClick={closeMenu}>contact</a>
                    </nav>
                    <a href="#contact" className="link-btn" onClick={closeMenu}>Make appointment</a>
                    {/* Toggle 'fa-times' class based on isMenuOpen state */}
                    <div
                        id="menu-btn"
                        className={`fas fa-bars ${isMenuOpen ? 'fa-times' : ''}`}
                        onClick={handleMenuToggle}
                    ></div>
                </div>
            </div>
        </header>
    );
};

export default Header;