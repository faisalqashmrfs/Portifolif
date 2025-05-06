import React, { useEffect, useState } from 'react';  
import './Portfolio.css';  
import img from './background.jpg'

const Portfolio = () => {  
  const works = [  
    { id: 1, title: 'عمل 1', description: 'وصف عمل 1' },  
    { id: 2, title: 'عمل 2', description: 'وصف عمل 2' },  
    { id: 3, title: 'عمل 3', description: 'وصف عمل 3' },  
    { id: 4, title: 'عمل 4', description: 'وصف عمل 4' },  
    { id: 5, title: 'عمل 5', description: 'وصف عمل 5' },  
  ];  

  const [value, setValue] = useState(1);

  const handleResize = () => {
    if (window.innerWidth <= 950) {
      setValue(1);
    } else {
      setValue(2);
    }
  };

  useEffect(() => {
    // تعيين قيمة المتغير عند تحميل المكون
    handleResize();

    // إضافة مستمع لحجم النافذة
    window.addEventListener('resize', handleResize);

    // تنظيف المستمع عند فك التثبيت
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);  

  const next = () => {  
    if (currentIndex < works.length - value) {  
      setCurrentIndex(currentIndex + value);  
    }  
  };  

  const prev = () => {  
    if (currentIndex > 0) {  
      setCurrentIndex(currentIndex - value);  
    }  
  };  

  return (  
    <div className="portfolio">  
      <h1>Portfolio</h1>  
      <h2>Recent Works</h2>  
      <div className="slider">  
        <button className="arrow arrow1" onClick={prev} disabled={currentIndex === 0}><h5>←</h5></button>  
        <div className="work-container">  
          {works.slice(currentIndex, currentIndex + value).map(work => (  
            <div key={work.id} className="work-item">  
               <h3>{work.title}</h3>  
               <p>{work.description}</p> 
               <img src={img} alt="" />
            </div>  
            
          ))}  
        </div>  
        <button className="arrow arrow2" onClick={next} disabled={currentIndex >= works.length - value}><h5>→</h5></button>  
      </div>  
    </div>  
  );  
};  

export default Portfolio;