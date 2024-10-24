import React from 'react'
import './PortfolioContent.css'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'
import ContactUs from '../ContactUs/ContactUs'

export default function PortfolioContent() {
  return (
    <div className='PortfolioContent'>
      <Hero/>
      <div className='liner'>
      <AboutMe/>
      <ContactUs />
      </div>
    </div>
  )
}
