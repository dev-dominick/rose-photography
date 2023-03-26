import React from 'react';
import { useLocation } from 'react-router-dom'
import AlbumCarousel from '../components/AlbumCarousel';
import '../styles/galleryCarouselLayout.css'
import '../App.css'

function SelectedAlbumDisplay() {

  const location = useLocation()
  const albumName = location.state.name
  const albumDescription = location.state.description

  let images = [];

  switch (albumName) {
    case 'Business':
      images = [];
      break;
    case 'Personal':
      images = [];
      break;
    case 'Showers':
      images = [];
      break;
    case 'Parties':
      images = [];
      break;
    case 'Animals':
      images = [];
      break;
    case 'Kids':
      images = [
        {
          original: require('../assets/Albums/KidsAlbum/ayarsKids1.jpg'),
          thumbnail: require('../assets/Albums/KidsAlbum/ayarsKids1.jpg'),
        },
        {
          original: require('../assets/Albums/KidsAlbum/ayarsKids2.jpg'),
          thumbnail: require('../assets/Albums/KidsAlbum/ayarsKids2.jpg'),
        },
        {
          original: require('../assets/Albums/KidsAlbum/ayarsKids3.jpg'),
          thumbnail: require('../assets/Albums/KidsAlbum/ayarsKids3.jpg'),
        },
        {
          original: require('../assets/Albums/KidsAlbum/ayarsKids4.jpg'),
          thumbnail: require('../assets/Albums/KidsAlbum/ayarsKids4.jpg'),
        },
        {
          original: require('../assets/Albums/KidsAlbum/ayarsKids5.jpg'),
          thumbnail: require('../assets/Albums/KidsAlbum/ayarsKids5.jpg'),
        }
      ];
      break;
    case 'Families':
      images = [];
      break;

    default:
      break;
  };

  return (
    <div className='carouselLayout main'>
      <h1>{albumName}</h1>
      <h3>{albumDescription}</h3>
      <AlbumCarousel albumImages={images} />
    </div>
  );
};

export default SelectedAlbumDisplay