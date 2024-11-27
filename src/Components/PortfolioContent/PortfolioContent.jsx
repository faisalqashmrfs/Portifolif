import React from 'react'
import './PortfolioContent.css'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'

export default function PortfolioContent() {
  return (
    <div className='PortfolioContent'>
      <Hero/>
      <div className='liner'>
      <AboutMe/>
      <Portfolio/>
      <ContactUs />
      <Skills/>
      <Footer />
      </div>
    </div>
  )
}
