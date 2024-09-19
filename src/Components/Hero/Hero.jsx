import { useEffect, useState } from 'react';
import './Hero.css'
import MyPhoto from './../../assets/Mask-group.png'

export default function Hero() {

  const [borderRadius, setBorderRadius] = useState("");
  const [transform, setTransform] = useState("");

  // دالة لتوليد القيم العشوائية لـ border-radius
  const randomBorderRadius = () => {
    return `${Math.random() * 80 + 60}% ${Math.random() * 80 + 40}% ${Math.random() * 60 + 40}% ${Math.random() * 80 + 40}% / ${Math.random() * 80 + 40}% ${Math.random() * 80 + 40}% ${Math.random() * 80 + 40}% ${Math.random() * 80 + 40}%`;
  };

  // دالة لتغيير حركة وحجم الـ blob
  const randomMovement = () => {
    const randomX = Math.random() * 0 - 20;
    const randomY = Math.random() * 0 - 20;
    const randomScale = Math.random() * 0 + 1.5;

    setBorderRadius(randomBorderRadius());
    setTransform(`translate(${randomX}px, ${randomY}px) scale(${randomScale})`);
  };

  // استخدام useEffect لتطبيق الحركة العشوائية بشكل مستمر
  useEffect(() => {
    const interval = setInterval(randomMovement, 800); // تغيير كل 1.5 ثانية
    return () => clearInterval(interval); // تنظيف التايمر عند تفكيك المكون
  }, []);


  return (
    <section className='Hero'>
      <div className='Hero-Div'>
        <div className="blob" style={{ borderRadius, transform }}>
          <img src={MyPhoto} alt="Profile" />
        </div>
        <div>
          <h2>My Name Is Faisal Qashmr</h2>
          <h3>just scrolling To Discover Me</h3>
        </div>
      </div>
    </section>
  )
}
