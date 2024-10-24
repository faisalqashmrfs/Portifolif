import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import me from './../../assets/Mask-group.png'
import './AboutMe.css'


export default function AboutMe() {

  const [borderRadius, setBorderRadius] = useState("");
  const [transform, setTransform] = useState("");

  // دالة لتوليد القيم العشوائية لـ border-radius
  const randomBorderRadius = () => {
    return `${Math.random() * 80 + 60}% ${Math.random() * 80 + 40}% ${Math.random() * 60 + 40}% ${Math.random() * 80 + 40}% / ${Math.random() * 80 + 40}% ${Math.random() * 80 + 40}% ${Math.random() * 80 + 40}% ${Math.random() * 80 + 40}%`;
  };

  // دالة لتغيير حركة وحجم الـ blob
  const randomMovement = () => {
    const randomX = Math.random() * 0 ;
    const randomY = Math.random() * 0 ;
    const randomScale = Math.random() * 0 + 2;

    setBorderRadius(randomBorderRadius());
    setTransform(`translate(${randomX}px, ${randomY}px) scale(${randomScale})`);
  };

  // استخدام useEffect لتطبيق الحركة العشوائية بشكل مستمر
  useEffect(() => {
    const interval = setInterval(randomMovement, 800); // تغيير كل 1.5 ثانية
    return () => clearInterval(interval); // تنظيف التايمر عند تفكيك المكون
  }, []);




  return (
    <section className='About-me'>
      <h2> I'M A  
      <Typewriter
        words={[' Full Stack Developer', ' UI/UX Designer', ' Web Trainer' , '' , '']}
        loop={0}
         deleteSpeed={35}
        cursor
        cursorStyle='|'
        typeSpeed={60}
       delaySpeed={1000}
      />
      </h2>
      <div className="blob" style={{ borderRadius, transform }}>
          <img src={me} alt="Profile" />
        </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum soluta necessitatibus reiciendis nihil culpa eos labore, deleniti fugiat iure debitis sequi ducimus qui, error, voluptatum consequuntur itaque tempora ratione!</p>
    </section>
  )
}
