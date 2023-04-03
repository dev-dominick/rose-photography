import React from 'react'
import '../styles/pricing.css'
import '../App.css'

export default function Pricing() {
    return (
        <div className='pricing main'>
            <header className='welcomeBanner'>
                <h1 className='bannerText'>Pricing / Services</h1>
            </header>
            <div className='pricingContainer'>

                <section className='servicesContainer'>
                    <div className='servicesInfo'>
                        <div className='serviceHeaderContainer'>
                            <h5 className='serviceHeader'> 1 Hour Shoots </h5>
                        </div>
                        <div className='servicePhoto'>
                            <img className='profilePic' src={'https://rosephotography.b-cdn.net/giAndAubs%20(1).jpg'} alt='Me at the beach'></img>
                        </div>
                        <div className='pricingLayout'>
                            <p className='servicesText'>With 15 edited photos - $150</p>
                            <p className='servicesText'>With 30 edited photos - $200</p>
                            <p className='servicesText'>With 45 edited photos - $250</p>
                            <p className='servicesText'>With 60 edited photos - $300</p>
                        </div>
                    </div>
                    <div className='servicesInfo'>
                        <div className='serviceHeaderContainer'>
                            <h5 className='serviceHeader'>Special Event Packages</h5>
                        </div>
                        <div className='apples'>
                            <div className='partyAndShowersHeaderContainer'>
                                <div className='partyAndShowersHeader'>Showers</div>
                                <div className='partyAndShowersPhoto'>
                                    <img className='profilePic' src={'https://rosephotography.b-cdn.net/babyShower%20(5).jpg'} alt='Me at the beach'></img>
                                </div>
                            </div>
                            <div className='partyAndShowersHeaderContainer'>
                                <div className='partyAndShowersHeader'>Parties</div>
                                <div className='partyAndShowersPhoto'>
                                    <img className='profilePic' src={'https://rosephotography.b-cdn.net/philliesGame.jpg'} alt='Me at the beach'></img>
                                </div>
                            </div>
                        </div>
                        <div className='pricingLayout'>
                            <p className='servicesText'>less than 25 miles</p>
                            <p className='servicesText'>Full Album 75-100 photos - $350</p>
                            <p className='servicesText'>over 25 miles</p>
                            <p className='servicesText'>Full Album 75-100 photos - $375</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )};
