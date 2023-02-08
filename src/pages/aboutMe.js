import React from 'react'
import '../styles/aboutMe.css'
import '../App.css'

export default function About() {
  return (
    <div className='about main'>
      <header className='welcomeBanner'>
        <h1 className='bannerText'>Meet Heather</h1>
      </header>

      <div className='aboutDisplay'>

        <div className='profilePicContainer'>

          <img className='profilePic' src={require('../assets/aboutMePhoto/aboutPhoto.jpg')} alt='Me at the beach'></img>
        </div>

        <section className='aboutDescritptionContainer'>
          <p className='statement' id='statement1'>
            Hi Everyone! Welcome to Rose Photography!
            I am new to the photography world in that I am a full-time
            registered nurse. Nursing is something I've loved for a very
            long time and have been blessed to be doing it for the last 5 years.
            I am a fur-mommy to 7 beautiful kitty cats and 4 incredible doggies
            who all bring so much joy and love into my life. I am big on being
            with family, constantly being with and doing things with my parents,
            sisters, niece and nephews, and friends who are more like family.
          </p>
          <h3>"Life's precious moments are caught by a lens"</h3>
          <p className='statement' id='statement2'>
            I have always been passionate about photography, constantly
            being the photographer for many family and friend events without
            even realizing it. Now is my chance to professionally bring to life
            people's most sacred moments. I know the importance of having
            pictures and what they could mean for years to come. It would be
            my absolute pleasure to capture these moments in the most fun and
            positive way for all!
          </p>
        </section>

      </div>

    </div>
  );
}
