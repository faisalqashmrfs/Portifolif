import React from 'react';  
import './Contact.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';  

const ContactUs = () => {  
    return (  
        <div className="contact-us-page">  
            <div className="form-container">  
                <h2>Send Me a Message</h2>  
                <form>  
                    <div className="form-group">  
                        <label>Name:</label>  
                        <input type="text" required />  
                    </div>  
                    <div className="form-group">  
                        <label>Email:</label>  
                        <input type="email" required />  
                    </div>  
                    <div className="form-group">  
                        <label>Subject:</label>  
                        <input type="text" required />  
                    </div>  
                    <div className="form-group">  
                        <label>Message:</label>  
                        <textarea required></textarea>  
                    </div>  
                    <button type="submit" className="submit-button">Send</button>  
                </form>  
            </div>  
            <div className="connect-container">  
                <h2>Let’s Connect</h2>  
                <div className="social-icons">  
                    <a href="#" className="social-icon">  
                        <div className="icon-circle">  
                            <FontAwesomeIcon icon={faFacebook} />   
                        </div>  
                        <p>Facebook</p>   
                    </a>  
                    <a href="#" className="social-icon">  
                        <div className="icon-circle">  
                            <FontAwesomeIcon icon={faTwitter} />   
                        </div>  
                        <p>Twitter</p>   
                    </a>  
                    <a href="#" className="social-icon">  
                        <div className="icon-circle">  
                            <FontAwesomeIcon icon={faInstagram} />   
                        </div>  
                        <p>Instagram</p>  
                    </a>  
                    <a href="#" className="social-icon">  
                        <div className="icon-circle">  
                            <FontAwesomeIcon icon={faLinkedin} />   
                        </div>  
                        <p>LinkedIn</p>  
                    </a>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default ContactUs;