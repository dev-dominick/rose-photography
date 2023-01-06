import React, { useState, useEffect } from 'react';
import '../styles/carousel.css'


export default function Carousel  ({ slides }) {


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex(currentIndex => (currentIndex + 1) % slides.length);
  };

  return (
    <div>
      <button onClick={handleNext}>Next</button>
        <div>
            <img className='slideImage' src={slides[currentIndex]}></img>
        </div>
    </div>
  );
};