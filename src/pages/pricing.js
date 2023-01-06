import React from 'react'
import '../styles/pricing.css'


export default function Pricing() {
    return (
        <div className='pricing'>
            <h1>Princing / Services</h1>

            <section className='servicesContainer'>

                <div className='servicesInfo'>
                    <h5> 1 Hour Shoots </h5>
                    <p>With 15 edited photos - $150</p>
                    <p>With 15 edited photos - $150</p>
                    <p>With 15 edited photos - $150</p>
                    <p>With 15 edited photos - $150</p>
                </div>

                <div className='servicesInfo'>
                    <h5>Special Event Packages(Showers, Parties)</h5>
                    <p>less than 25 miles</p>
                    <p>Full Album 75-100 photos - $350</p>
                    <p>over 25 miles</p> 
                    <p>Full Album 75-100 photos - $375</p>
                </div>

            </section>
        </div>
    )
}
