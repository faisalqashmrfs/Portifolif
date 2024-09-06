import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Looder.css'; // ضع التنسيقات الخاصة بك هنا

const LoadingScreen = ({ onLoaded }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      onLoaded(); // يخبر التطبيق الرئيسي بأن التحميل انتهى
    }, 17800); // المدة الزمنية قبل التحميل (يمكنك تعديلها حسب الحاجة)

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={`loading-screen ${isLoaded ? 'fade-out' : ''}`}>
      <div className="typewriter-container">
      <Typewriter
        words={['HI', 'Welcome to my Portfolio', 'If you are looking for a React developer ..?' , 'Then you are in the right place' , 'Enjoy your stay !']}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={60}
        deleteSpeed={35}
        delaySpeed={1000}
      />
    </div>
    </div>
  );
};

export default LoadingScreen;
