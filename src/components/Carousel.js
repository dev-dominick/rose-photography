import React, { useState, useEffect } from 'react';
import '../styles/carousel.css'


export default function Carousel({ slides, allPhotos }) {


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
  const handleBack = () => {
    setCurrentIndex(currentIndex => (currentIndex - 1) % slides.length);
  };

  return (
    <div className='carousel'>

      {/* <div>
        <img className='slideImage' src={slides[currentIndex]}></img>
      </div>


      <div className='photoDisplayContainer'>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
        <div>
          <img className='slideImage' src={slides[currentIndex]}></img>
        </div>
      </div> */}

      {allPhotos.map((p) => (


        <div className='hey'>
          <div className='display'>
            <img className='slideImage' id='src' src={p.src} alt={"hey"} />
          </div>
        </div>

      ))}

    </div>
  );
};