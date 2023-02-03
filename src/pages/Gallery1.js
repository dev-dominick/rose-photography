import React from 'react';
// import Carousel from '../components/Carousel';
import GalleryCarousel from '../components/GalleryCarousel';
import '../styles/galleryDisplay.css'
import '../App.css'

function gallery1() {

  // const kidPics = [
  //   { src: require('../assets/ayarsKids/ayarsKids1.jpg') },
  //   { src: require('../assets/ayarsKids/ayarsKids2.jpg') },
  //   { src: require('../assets/ayarsKids/ayarsKids3.jpg') },
  //   { src: require('../assets/ayarsKids/ayarsKids4.jpg') },
  //   { src: require('../assets/ayarsKids/ayarsKids5.jpg') },
  // ]

  const kidPics = [1, 2, 3, 4, 5].map((number) => ({
    src: require(`../assets/ayarsKids/ayarsKids${number}.jpg`)
}));


  return (
    <div className='galleryDisplay main'>
      {/* <Carousel slides={kidPics} allPhotos={kidPics}/> */}
      < GalleryCarousel images={kidPics} />
    </div>
  )
}

export default gallery1