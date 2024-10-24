import { useEffect, useState } from 'react';
import './Hero.css'
import MyPhoto from './../../assets/image.png'

export default function Hero() {
  return (
    <section className='Hero'>
      <div className='Hero-Div'>
          <img src={MyPhoto} alt="Profile" />
        <div className='Content'>
          <h2>My Name Is Faisal Qashmr</h2>
          <h3>just scrolling To Discover Me</h3>
        </div>
      </div>
    </section>
  )
}
