import React, { useEffect, useState } from 'react';  
import './Portfolio.css';  
import img1 from './img/12.png'
import img2 from './img/13.png'
import img3 from './img/14.png'
import img4 from './img/15.png'
import img5 from './img/16.png'
import img6 from './img/17.png'

const Portfolio = () => {  
  const works = [  
    { id: 1, title: 'EduPress', description: 'https://faisalqashmrfs.github.io/Education/#' , img : img1 },  
    { id: 2, title: 'static-project-x', description: 'https://faisalqashmrfs.github.io/static-project-x-frontend/dashboard/' , img : img2 },  
    { id: 3, title: 'golobe', description: 'https://faisalqashmrfs.github.io/Golobe-X-Front/' , img : img3 },  
    { id: 4, title: 'SIRIA', description: '#' , img : img4 },  
    { id: 5, title: 'Crypto', description: 'https://faisalqashmrfs.github.io/Crypto-abd/' , img : img5 },  
    { id: 6, title: 'Breeze', description: '#' , img : img6 },  

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
               <h3><a href={work.description}>{work.description == "#" ? 'موقع سري' : 'clice to viwe'}</a></h3> 
               <img src={work.img} alt="" />
            </div>  
            
          ))}  
        </div>  
        <button className="arrow arrow2" onClick={next} disabled={currentIndex >= works.length - value}><h5>→</h5></button>  
      </div>  
    </div>  
  );  
};  

export default Portfolio;