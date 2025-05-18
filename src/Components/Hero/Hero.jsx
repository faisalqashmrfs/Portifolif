import { useEffect, useState } from 'react';
import './Hero.css'
import MyPhoto from './../../assets/picsvg_download.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
                <button>
                  <span>CV .. ?</span>
                  <span>
                    <a href="Faisalcv.pdf" download style={{textDecoration:'none' , color:'#fff' }}>
                      one Click
                    </a>
                  </span>

                </button>
              </div>
              <div className='Icons-Hero'>
                <a href="https://www.facebook.com/profile.php?id=100026623652135" className="footer-social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://github.com/faisalqashmrfs" className="footer-social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/faesalekashmar/" className="footer-social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/faisal-qashmr-234b7b260/" className="footer-social-icon">
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
