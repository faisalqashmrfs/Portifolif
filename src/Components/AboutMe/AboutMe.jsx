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
      <p>
         Experienced Front End Developer skilled in managing multiple React projects simultaneously. Demonstrates strong critical thinking, problem solving, time management, multitasking, and effective communication. Passionate about building scalable web applications and mentoring junior developers.
      </p>
    </section>
  )
}
