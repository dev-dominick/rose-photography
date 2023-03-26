import React from 'react'
import '../styles/home.css';
import '../App.css'
import GalleryAlbumDisplay from '../components/GalleryAlbumDisplay';


export default function Home() {

  return (
    <div className="home main">

      <header className='welcomeBanner'>
        <h1 className='bannerText'>Welcome to Rose Photography</h1>
      </header>

      <section className='homeDisplay'>

        <GalleryAlbumDisplay/>

        {/* <div className='homeDisplayPhoto'>
          <img className='introPhoto' src={require('../assets/coverPhotos/homepage.jpg')} alt='nature'></img>
        </div>
        <div className='homeBtn'>
          < CustomizedButtons text={"See More"} to={'/gallery'} />
        </div> */}

      </section>

    </div>
  );
}






