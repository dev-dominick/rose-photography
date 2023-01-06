import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <footer className='footerContainer'>
        <p className='footerText'>Rose Photography</p>
        <a className='footerText footerContact' href='/contact'><p>Contact me for more information</p></a>
        <p className='footerText'>Dominick Albano © 2022</p>
      </footer>
    </div>
  )
}

