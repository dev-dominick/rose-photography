import React from 'react'
import "../styles/gallery.css";
import GalleryAlbumDisplay from '../components/GalleryAlbumDisplay';

export default function Gallery() {

  return (

    <div className='galleryPage'>
      <header className='welcomeBanner'>
        <h1 className='bannerText'>Gallery</h1>
      </header>
      < GalleryAlbumDisplay />
    </div>
  );
}




