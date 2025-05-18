import React, { useEffect, useState } from 'react';
import './Footer.css';
import { FaChevronUp } from "react-icons/fa";


const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);  // تعيين القيمة إلى 100 بكسل  
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">SAY MY NAME ..!</p>
            </div>

            <button className={isVisible ? 'btn' : 'btnoff'} onClick={scrollToTop}><FaChevronUp />
            </button>

        </footer>
    );
};

export default Footer;