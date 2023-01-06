import React from 'react';
import Carousel from '../components/Carousel';

function gallery1() {

const kidPics = [
  require('../assets/ayarsKids/ayarsKids1.jpg'),
  require('../assets/ayarsKids/ayarsKids2.jpg'),
  require('../assets/ayarsKids/ayarsKids3.jpg'),
  require('../assets/ayarsKids/ayarsKids4.jpg'),
  require('../assets/ayarsKids/ayarsKids5.jpg'),
]

  return (
    <div>
     <Carousel slides={kidPics} /> 
        
    </div>
  )
}

export default gallery1