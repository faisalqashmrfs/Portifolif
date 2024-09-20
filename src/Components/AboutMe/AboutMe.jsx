import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function AboutMe() {
  return (
    <section>
      <h2> I'M A  
      <Typewriter
        words={[' Full Stack Developer', ' UI/UX Designer', ' Web Trainer' , '' , '']}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={60}
        deleteSpeed={35}
        delaySpeed={1000}
      />
      </h2>
    </section>
  )
}
