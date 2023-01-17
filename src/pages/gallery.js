import React from 'react'
import "../styles/gallery.css";
// import Carousel from '../components/Carousel';
import TestGallery from '../components/TestGallery';

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
      <h1>Gallery Page</h1>

      < TestGallery />

      {/* <div className='galleryNavContainer'>
        {galleryPages.map((page) => (

          <div className='galleryNavSelection'>

            <img className='galleryNavSelectionPhoto' src={page.src} alt={page.alt}></img>

            <div className='galleryNavSelectionBottom'>
              <div className='galleryNavSelectionDescription'>{page.description}</div>
              <button className='galleryNavSelectionButton' >See More</button>
            </div>

          </div>

        ))}

      </div> */}
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



