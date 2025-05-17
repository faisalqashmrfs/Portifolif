import React from 'react';
import './Contact.css';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    return (

        <div className='Fathar'>
            <div className=' Get-In-Touch'>

                <div class="wrapper">
                    <svg width="200" height="140" xmlns="http://www.w3.org/2000/svg">
                        <path d="
      M 10 40 
      h 180 
      a 10 10 0 0 0 10 10 
      v 40 
      a 10 10 0 0 0 -10 10 
      h -180 
      a 10 10 0 0 0 -10 -10 
      v -40 
      a 10 10 0 0 0 10 -10 
      z"
                            fill="#333333" stroke="red" stroke-width="2"
                            class="animated-loop"
                        />
                        <rect x="20" y="50" width="160" height="40" fill="none" stroke="#ccc" />
                        <text x="100" y="72" dominant-baseline="middle" text-anchor="middle" font-size="18" fontWeight="600">
                            Get In Touch
                        </text>
                    </svg>
                </div>

            </div>

            <section style={{ color: '#8f8f8f' }}>
                <div className="parant">

                    <div className="children">
                        <h2>  <CiLocationOn />
                        </h2>
                        <h3>addres</h3>
                        <p>999 Carter Street
                            Sailor Springs, IL 62434</p>
                    </div>
                    <div className="children">
                        <h2><FaPhoneAlt />
                        </h2>
                        <h3>phone</h3>
                        <p>999 Carter Street
                            Sailor Springs, IL 62434</p>
                    </div>
                    <div className="children">
                        <h2><MdOutlineEmail />
                        </h2>
                        <h3>email</h3>
                        <p>999 Carter Street
                            Sailor Springs, IL 62434</p>
                    </div>
                    <div className="children">
                        <h2><FaWhatsapp />
                        </h2>
                        <h3>fedback chat</h3>
                        <p>999 Carter Street
                            Sailor Springs, IL 62434</p>
                    </div>
                </div>
                <div className="contact-us-page">
                    <div className="form-container">
                        <h2>Send Me a Message</h2>
                        <form>
                            <div className="Name-email">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Subject:</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Message:</label>
                                <textarea required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Send A Message</button>
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
            </section>
        </div>
    );
};

export default ContactUs;