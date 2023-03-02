import ImageGallery from 'react-image-gallery';
import React from 'react';




function AlbumCarousel({  albumImages }) {
//   const images = [
//     {
//         original: require('../assets/ayarsKids/ayarsKids1.jpg'),
//         thumbnail: require('../assets/ayarsKids/ayarsKids1.jpg'),
//     },
//     {
//         original: require('../assets/ayarsKids/ayarsKids2.jpg'),
//         thumbnail: require('../assets/ayarsKids/ayarsKids2.jpg'),
//     },
//     {
//         original: require('../assets/ayarsKids/ayarsKids3.jpg'),
//         thumbnail: require('../assets/ayarsKids/ayarsKids3.jpg'),
//     },
//     {
//         original: require('../assets/ayarsKids/ayarsKids4.jpg'),
//         thumbnail: require('../assets/ayarsKids/ayarsKids4.jpg'),
//     },
//     {
//         original: require('../assets/ayarsKids/ayarsKids5.jpg'),
//         thumbnail: require('../assets/ayarsKids/ayarsKids5.jpg'),
//     },
// ];
  return (
    <ImageGallery items={ albumImages } />
  );
};


export default AlbumCarousel;
