import React from 'react'
import '../styles/home.css';
import '../App.css'

// import Footer from '../components/footer';


export default function Home() {

  return (
    <div className="home main">
      <h1 className='homeHeader'>Life's precious moments caught by a lens</h1>
      {/* <br></br> */}

      <div className='homeDisplay'>

        <div className='homeDisplay1'></div>
        <div className='homeDisplayPhoto'>
          <img className='introPhoto' src={require('../assets/nature7.jpg')} alt='nature'></img>
        </div>
        <div className='homeDisplay2'></div>

      </div>
      {/* < Footer /> */}
    </div>
  );
}






