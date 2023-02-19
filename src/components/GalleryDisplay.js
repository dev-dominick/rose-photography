import React from 'react'
import '../styles/GalleryDisplay.css'

function GalleryDisplay( which, alt ) {

    const [ album, setAlbum ] = React.useState("")

    const galleryPages = [
        {
            pageName: 'Business',
            description: "Looking for photos to help show-off you or your business? Whether a head-shot or photos behind the scenes, look no further! Professional photos can help bring to light the beauty of your business and provide clientele with an insight to what amazing things you can offer!",
            href: '/gallery/businessgallery',
            src: require('../assets/ayarsKids/ayarsKids1.jpg'),
            alt: 'gallery page of business'
        },
        {
            pageName: 'Personal',
            description: 'Thinking about a photoshoot of yourself for a celebration? – Graduating from high school or college? Coming up on a birthday? Having a baby? - Whatever the occasion, I’m your girl to help capture the moment of a lifetime!',
            href: '/personalgallery',
            src: require('../assets/ayarsKids/ayarsKids2.jpg'),
            alt: 'gallery page of personal'
        },
        {
            pageName: 'Showers',
            description: 'Bridal or Baby, I’ll be there to help capture the showering of the special person before one of the biggest moments of their lives! While capturing the fun of every moment, the little details will certainly not be forgotten, so relax and enjoy the moment while I get it all in photos!',
            href: '/showersgallery',
            src: require('../assets/ayarsKids/ayarsKids3.jpg'),
            alt: 'gallery page of showers'
        },
        {
            pageName: 'Parties',
            description: "Birthday, retirement, gender reveals, special events – I will be there to help capture all of the fun of an once-in-a-lifetime event!",
            href: '/partiesgallery',
            src: require('../assets/ayarsKids/ayarsKids1.jpg'),
            alt: 'gallery page of parties'
        },
        {
            pageName: 'Animals',
            description: 'Animals have a special place in their human’s hearts and I am here to capture their adorable selves forever!',
            href: '/animalsgallery',
            src: require('../assets/ayarsKids/ayarsKids2.jpg'),
            alt: 'gallery page of animals'
        },
        {
            pageName: 'Kids',
            description: 'Whether a new-born session or pictures with all of the kids, capturing their milestones is something that is near and dear to my heart!',
            href: '/kidsgallery',
            src: require('../assets/ayarsKids/ayarsKids3.jpg'),
            alt: 'gallery page of kids'
        },
        {
            pageName: 'Families',
            description: 'Expecting to grow your family or looking to update your family photos? I am your girl to help capture these milestones!',
            href: '/familiesgallery',
            src: require('../assets/ayarsKids/ayarsKids3.jpg'),
            alt: 'gallery page of families'
        },

    ]

    return (
        <div className='gdcontainer'>
            <div className='grid'>

                {galleryPages.map((page) => (
                    <div class='gallery__item view-first'>
                        <a href={page.href}>
                            <img src={page.src} class="gallery__img" alt={alt}></img>
                            <div className='infoContainer mask'>
                                <div className='pageName'>{page.pageName}</div>
                            </div>
                        </a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default GalleryDisplay;
