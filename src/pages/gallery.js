import React from 'react'
import "../styles/gallery.css";
// import Carousel from '../components/Carousel';
import GalleryDisplay from '../components/GalleryDisplay';

export default function Gallery() {

  // const galleryPages = [
  //   {
  //     pageName: 'Precious Moments',
  //     href: '/gallery1',
  //     description: "All of life's precious moments captured",
  //     src: require('../assets/ayarsKids/ayarsKids1.jpg'),
  //     alt: 'gallery page for baby pictures'
  //   },
  //   {
  //     pageName: 'Family',
  //     href: '/gallery2',
  //     description: 'Photos of family',
  //     src: require('../assets/ayarsKids/ayarsKids2.jpg'),
  //     alt: 'gallery page for baby pictures'
  //   },
  //   {
  //     pageName: 'Nature',
  //     href: '/gallery3',
  //     description: 'nature captured',
  //     src: require('../assets/ayarsKids/ayarsKids3.jpg'),
  //     alt: 'gallery page for baby pictures'
  //   },
  //   {
  //     pageName: 'Precious Moments',
  //     href: '/gallery1',
  //     description: "All of life's precious moments captured",
  //     src: require('../assets/ayarsKids/ayarsKids1.jpg'),
  //     alt: 'gallery page for baby pictures'
  //   },
  //   {
  //     pageName: 'Family',
  //     href: '/gallery2',
  //     description: 'Photos of family',
  //     src: require('../assets/ayarsKids/ayarsKids2.jpg'),
  //     alt: 'gallery page for baby pictures'
  //   },
  //   {
  //     pageName: 'Nature',
  //     href: '/gallery3',
  //     description: 'nature captured',
  //     src: require('../assets/ayarsKids/ayarsKids3.jpg'),
  //     alt: 'gallery page for baby pictures'
  //   },

  // ]


  return (

    <div className='galleryPage'>
      <header className='welcomeBanner'>
        <h1 className='bannerText'>Gallery</h1>
      </header>
      < GalleryDisplay />


    </div>
  );
}

// href={page.href}


/* <Carousel slides={kidPics} /> */ 

// const kidPics = [
//   require('../assets/ayarsKids/ayarsKids1.jpg'),
//   require('../assets/ayarsKids/ayarsKids2.jpg'),
//   require('../assets/ayarsKids/ayarsKids3.jpg'),
//   require('../assets/ayarsKids/ayarsKids4.jpg'),
//   require('../assets/ayarsKids/ayarsKids5.jpg'),
// ]



