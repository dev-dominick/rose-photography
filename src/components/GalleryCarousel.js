import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import '../styles/carousel.css'

const GalleryCarousel = ({ images }) => {
    // const images = [1, 2, 3, 4, 5].map((number) => ({
    //     src: require(`../assets/ayarsKids/ayarsKids${number}.jpg`)
    // }));

    return (

        <div className='carousel'>
            <Carousel images={images} style={{ height: 700, width: 1000 }} />
        </div>
    );
};

export default GalleryCarousel;