import React, { useState } from 'react';  
import './Portfolio.css';  

const Portfolio = () => {  
  const works = [  
    { id: 1, title: 'عمل 1', description: 'وصف عمل 1' },  
    { id: 2, title: 'عمل 2', description: 'وصف عمل 2' },  
    { id: 3, title: 'عمل 3', description: 'وصف عمل 3' },  
    { id: 4, title: 'عمل 4', description: 'وصف عمل 4' },  
    { id: 5, title: 'عمل 5', description: 'وصف عمل 5' },  
  ];  

  const [currentIndex, setCurrentIndex] = useState(0);  

  const next = () => {  
    if (currentIndex < works.length - 2) {  
      setCurrentIndex(currentIndex + 2);  
    }  
  };  

  const prev = () => {  
    if (currentIndex > 0) {  
      setCurrentIndex(currentIndex - 2);  
    }  
  };  

  return (  
    <div className="portfolio">  
      <h1>Portfolio</h1>  
      <h2>Recent Works</h2>  
      <div className="slider">  
        <button className="arrow" onClick={prev} disabled={currentIndex === 0}>←</button>  
        <div className="work-container">  
          {works.slice(currentIndex, currentIndex + 2).map(work => (  
            <div key={work.id} className="work-item">  
               <h3>{work.title}</h3>  
               <p>{work.description}</p> 
            </div>  
            
          ))}  
        </div>  
        <button className="arrow" onClick={next} disabled={currentIndex >= works.length - 2}>→</button>  
      </div>  
    </div>  
  );  
};  

export default Portfolio;