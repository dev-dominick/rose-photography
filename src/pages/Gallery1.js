import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/galleryDisplay.css'
import '../App.css'

function gallery1() {

  const kidPics = [
    { src: require('../assets/ayarsKids/ayarsKids1.jpg') },
    { src: require('../assets/ayarsKids/ayarsKids2.jpg') },
    { src: require('../assets/ayarsKids/ayarsKids3.jpg') },
    { src: require('../assets/ayarsKids/ayarsKids4.jpg') },
    { src: require('../assets/ayarsKids/ayarsKids5.jpg') },
  ]

  return (
    <div className='galleryDisplay main'>
      <Carousel slides={kidPics} allPhotos={kidPics}/>
    </div>
  )
}

export default gallery1