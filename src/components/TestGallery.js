import React from 'react'
import '../styles/testGallery.css'

function TestGallery(img, alt) {

    // const galleryPages = [
    //     {
    //       pageName: 'Precious Moments',
    //       href: '/gallery1',
    //       description: "All of life's precious moments captured",
    //       src: require('../assets/ayarsKids/ayarsKids1.jpg'),
    //       alt: 'gallery page for baby pictures'
    //     },
    //     {
    //       pageName: 'Family',
    //       href: '/gallery2',
    //       description: 'Photos of family',
    //       src: require('../assets/ayarsKids/ayarsKids2.jpg'),
    //       alt: 'gallery page for baby pictures'
    //     },
    //     {
    //       pageName: 'Nature',
    //       href: '/gallery3',
    //       description: 'nature captured',
    //       src: require('../assets/ayarsKids/ayarsKids3.jpg'),
    //       alt: 'gallery page for baby pictures'
    //     },
    //     {
    //       pageName: 'Precious Moments',
    //       href: '/gallery1',
    //       description: "All of life's precious moments captured",
    //       src: require('../assets/ayarsKids/ayarsKids1.jpg'),
    //       alt: 'gallery page for baby pictures'
    //     },
    //     {
    //       pageName: 'Family',
    //       href: '/gallery2',
    //       description: 'Photos of family',
    //       src: require('../assets/ayarsKids/ayarsKids2.jpg'),
    //       alt: 'gallery page for baby pictures'
    //     },
    //     {
    //       pageName: 'Nature',
    //       href: '/gallery3',
    //       description: 'nature captured',
    //       src: require('../assets/ayarsKids/ayarsKids3.jpg'),
    //       alt: 'gallery page for baby pictures'
    //     },
    
    //   ]

    return (
        <div className='fitPage'>
            <div className='testGallery'>

                <div class='gallery__item gallery__item--1'>
                    <img src={require('../assets/coverPhotos/homepage.jpg')} class="gallery__img" alt={alt}></img>
                </div>

                <div class="gallery__item gallery__item--2">
                    <img src={require('../assets/coverPhotos/homepage.jpg')} class="gallery__img" alt={alt}></img>
                </div>
                <div class="gallery__item gallery__item--3">
                    <img src={require('../assets/coverPhotos/homepage.jpg')} class="gallery__img" alt={alt}></img>
                </div>
                <div class="gallery__item gallery__item--4">
                    <img src={require('../assets/coverPhotos/homepage.jpg')} class="gallery__img" alt={alt}></img>
                </div>
                <div class="gallery__item gallery__item--5">
                    <img src={require('../assets/coverPhotos/homepage.jpg')} class="gallery__img" alt={alt}></img>
                </div>
                <div class="gallery__item gallery__item--6">
                    <img src={require('../assets/coverPhotos/homepage.jpg')} class="gallery__img" alt={alt}></img>
                </div>
            </div>
        </div>
    )
}

export default TestGallery



{/* <img src={img} class="gallery__img" alt={alt}></img> */}
