import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import me from './../../assets/Mask-group.png'
import './AboutMe.css'


export default function AboutMe() {



  return (
    <section className='About-me'>
      <h2> I'M A  
      <Typewriter
        words={[' Full Stack Developer', ' UI/UX Designer', ' Web Trainer']}
        loop={0}
         deleteSpeed={35}
        cursor
        cursorStyle='|'
        typeSpeed={50}
       delaySpeed={1000}
      />
      </h2>
      <div className="blob">
          <img src={me} alt="Profile" />
        </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum soluta necessitatibus reiciendis nihil culpa eos labore, deleniti fugiat iure debitis sequi ducimus qui, error, voluptatum consequuntur itaque tempora ratione!</p>
    </section>
  )
}
