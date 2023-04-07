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
      images = [
        {
          original: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
          thumbnail: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        }
      ];
      break;
    case 'Personal':
      images = [
        {
          original: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
          thumbnail: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        }
      ];
      break;
    case 'Showers':
      images = [
        {
          original: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
          thumbnail: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        }
      ];
      break;
    case 'Parties':
      images = [
        {
          original: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
          thumbnail: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        }
      ];
      break;
    case 'Animals':
      images = [
        {
          original: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
          thumbnail: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        }
      ];
      break;
    case 'Kids':
      images = [
        {
          original: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
          thumbnail: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        },
        {
          original: '',
          thumbnail: '',
        }
      ];
      break;
    case 'Families':
      images = [        {
        original: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
        thumbnail: 'https://rosephotography.b-cdn.net/ayarsKids1.jpg',
      },
      {
        original: '',
        thumbnail: '',
      },
      {
        original: '',
        thumbnail: '',
      },
      {
        original: '',
        thumbnail: '',
      },
      {
        original: '',
        thumbnail: '',
      }];
      break;

    default:
      break;
  };

  return (
    <div className='carouselLayout main'>
      <h1 className='carouselPageHeader'>{albumName}</h1>
      <h3 className='carouselPageDescription'>{albumDescription}</h3>
      <br/>
        <br/>
      <div className='carouselContainer'>
        <AlbumCarousel albumImages={images} />
      </div>
    </div>
  );
};

export default SelectedAlbumDisplay