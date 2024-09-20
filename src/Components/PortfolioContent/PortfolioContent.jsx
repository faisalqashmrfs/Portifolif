import React from 'react'
import './PortfolioContent.css'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'

export default function PortfolioContent() {
  return (
    <div className='PortfolioContent'>
      <Hero/>
      <AboutMe/>
    </div>
  )
}
