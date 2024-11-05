import { useEffect, useState } from 'react';
import './Hero.css'
import MyPhoto from './../../assets/picsvg_download.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  return (
    <section className='Hero'>
      <div className='Hero-Div'>
        <img src={MyPhoto} alt="Profile" />
        <div className='Content-Father'>
          <div className='Content'>
            <h2><span>Hi again</span> <br />and Welcome back to my universe</h2>
            <h3>just scrolling To Discover Me</h3>
            <div className='Icons-on-Hero'>
              <div className='Btn-Animate'>
                <button
                  onClick={() => {
                    console.log('test');
                  }}>
                  <span>Contact .. !</span>
                  <span>one Click </span>
                </button>
              </div>
              <div className='Icons-Hero'>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
