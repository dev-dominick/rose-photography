import React, { useState, useEffect } from 'react';
import '../styles/carousel.css'


export default function Carousel({ slides, allPhotos }) {


  const [currentIndex, setCurrentIndex] = useState(slides[0].src);
  // const []

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(currentIndex => (currentIndex + 1) % slides.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleNext = () => {
    setCurrentIndex(currentIndex => (slides[0 + 1].src));
  };
  const handleBack = () => {
    setCurrentIndex(currentIndex => (currentIndex - 1));
  };

console.log(slides[0].src);


  return (
    <div className='carousel'>

      <div className='mainImageContainer'>
        <img className='mainImage' src={currentIndex} alt={'hi'}></img>
      </div>

        {/* <button onClick={handleBack}>Back</button> */}
        {/* <button onClick={handleNext}>Next</button> */}

      
      <div className='dogs'>
        {allPhotos.map((p, key) => (


            <div key={key} className='display' onClick={() => setCurrentIndex(p.src) }>
              <img className='slideImage' id='src' src={p.src} alt={"hey"} />
            </div>

        ))}

      </div>


    </div>
  );
};