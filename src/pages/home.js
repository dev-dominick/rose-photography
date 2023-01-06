import React from 'react'
import '../styles/home.css';
import Footer from '../components/footer';


export default function Home() {

  return (
    <div className="home">
      <h1 className='homeHeader'>Life's precious moments caught by a lens</h1>
      <br></br>
      <div className='introContainer'>
        <img className='introPhoto' src={require('../assets/nature7.jpg')} alt='nature'></img>
      </div>
      < Footer />
    </div>
  );
}






