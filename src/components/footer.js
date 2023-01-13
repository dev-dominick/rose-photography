import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <Footer className='footerContainer'>
        <p className='footerText'>Rose Photography</p>
        <a className='footerText footerContact' href='/contact'><p>Contact me for more information</p></a>
        <p className='footerText'>Dominick Albano © 2023</p>
      </Footer>
      <Footer className='footerContainer'>
        <p>All content is property of Rose Photography</p>
      </Footer>
    </div>
  )
}

