import ImageGallery from 'react-image-gallery';
import React from 'react';




function AlbumCarousel({  albumImages }) {

  return (
    <ImageGallery items={ albumImages } />
  );
};


export default AlbumCarousel;
