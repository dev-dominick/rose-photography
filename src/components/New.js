import ImageGallery from 'react-image-gallery';
import React from 'react';
const images = [
  {
    original: require('../assets/ayarsKids/ayarsKids1.jpg'),
    thumbnail: require('../assets/ayarsKids/ayarsKids1.jpg'),
  },
  {
    original: require('../assets/ayarsKids/ayarsKids2.jpg'),
    thumbnail: require('../assets/ayarsKids/ayarsKids2.jpg'),
  },
  {
    original: require('../assets/ayarsKids/ayarsKids3.jpg'),
    thumbnail: require('../assets/ayarsKids/ayarsKids3.jpg'),
  },
  {
    original: require('../assets/ayarsKids/ayarsKids4.jpg'),
    thumbnail: require('../assets/ayarsKids/ayarsKids4.jpg'),
  },
  {
    original: require('../assets/ayarsKids/ayarsKids5.jpg'),
    thumbnail: require('../assets/ayarsKids/ayarsKids5.jpg'),
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
};

export default MyGallery