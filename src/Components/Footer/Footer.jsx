import React, { useEffect } from 'react';  
import './Footer.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';  

const Footer = () => {  
    return (  
        <footer className="footer">  
            <div className="footer-content">  
                <h2>Stay Connected</h2>  
                <div className="footer-social-icons">  
                    <a href="#" className="footer-social-icon">  
                        <FontAwesomeIcon icon={faFacebook} />  
                    </a>  
                    <a href="#" className="footer-social-icon">  
                        <FontAwesomeIcon icon={faTwitter} />  
                    </a>  
                    <a href="#" className="footer-social-icon">  
                        <FontAwesomeIcon icon={faInstagram} />  
                    </a>  
                    <a href="#" className="footer-social-icon">  
                        <FontAwesomeIcon icon={faLinkedin} />  
                    </a>  
                </div>  
                <p className="footer-text">© 2023 Your Company Name. All rights reserved.</p>  
            </div>  
        </footer>  
    );  
};  

export default Footer;