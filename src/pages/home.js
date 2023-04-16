import React from 'react'
import '../styles/home.css';
import '../App.css'
import GalleryAlbumDisplay from '../GalleryComponents/GalleryAlbumDisplay';


export default function Home() {

  return (
    <div className="home main">

      <header className='welcomeBanner'>
        <h1 className='bannerText'>Welcome to Rose Photography</h1>
      </header>

      <section className='homeDisplay'>

        <GalleryAlbumDisplay/>

      </section>

    </div>
  );
}






