import React from 'react'
import "../styles/gallery.css";
import GalleryDisplay from '../components/GalleryDisplay';

export default function Gallery() {

  return (

    <div className='galleryPage'>
      <header className='welcomeBanner'>
        <h1 className='bannerText'>Gallery</h1>
      </header>
      < GalleryDisplay />
    </div>
  );
}




