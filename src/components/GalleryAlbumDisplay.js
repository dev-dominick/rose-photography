import React from 'react'
import { Link } from 'react-router-dom'
import SelectedAlbumDisplay from '../GalleryPages/SelectedAlbumDisplay';
import '../styles/GalleryDisplay.css'

function GalleryAlbumDisplay() {

    const [albumHandler, setAlbumHandler] = React.useState({
        name: '',
        description: ''
    });
// find pics for categories that are listed, 
    const albumInformation = [
        {
            pageName: 'Business',
            description: "Looking for photos to help show-off you or your business? Whether a head-shot or photos behind the scenes, look no further! Professional photos can help bring to light the beauty of your business and provide clientele with an insight to what amazing things you can offer!",
            href: '/gallery/businessgallery',
            src: require('../assets/Albums/KidsAlbum/ayarsKids1.jpg'),
            alt: 'gallery page of business'
        },
        {
            pageName: 'Personal',
            description: 'Thinking about a photoshoot of yourself for a celebration? – Graduating from high school or college? Coming up on a birthday? Having a baby? - Whatever the occasion, I’m your girl to help capture the moment of a lifetime!',
            href: '/gallery/personalgallery',
            src: require('../assets/Albums/KidsAlbum/ayarsKids2.jpg'),
            alt: 'gallery page of personal'
        },
        {
            pageName: 'Showers',
            description: 'Bridal or Baby, I’ll be there to help capture the showering of the special person before one of the biggest moments of their lives! While capturing the fun of every moment, the little details will certainly not be forgotten, so relax and enjoy the moment while I get it all in photos!',
            href: '/gallery/showersgallery',
            src: require('../assets/Albums/KidsAlbum/ayarsKids3.jpg'),
            alt: 'gallery page of showers'
        },
        {
            pageName: 'Parties',
            description: "Birthday, retirement, gender reveals, special events – I will be there to help capture all of the fun of an once-in-a-lifetime event!",
            href: '/gallery/partiesgallery',
            src: require('../assets/Albums/KidsAlbum/ayarsKids1.jpg'),
            alt: 'gallery page of parties'
        },
        {
            pageName: 'Animals',
            description: 'Animals have a special place in their human’s hearts and I am here to capture their adorable selves forever!',
            href: '/gallery/animalsgallery',
            src: require('../assets/Albums/KidsAlbum/ayarsKids2.jpg'),
            alt: 'gallery page of animals'
        },
        {
            pageName: 'Kids',
            description: 'Whether a new-born session or pictures with all of the kids, capturing their milestones is something that is near and dear to my heart!',
            href: '/gallery/kidsgallery',
            src: require('../assets/Albums/KidsAlbum/ayarsKids3.jpg'),
            alt: 'gallery page of kids'
        },
        {
            pageName: 'Families',
            description: 'Expecting to grow your family or looking to update your family photos? I am your girl to help capture these milestones!',
            href: '/gallery/familiesgallery',
            src: require('../assets/Albums/KidsAlbum/ayarsKids3.jpg'),
            alt: 'gallery page of families'
        },

    ];
    // console.log(albumHandler);

    switch (albumHandler) {
        case 'Business':

            return <SelectedAlbumDisplay />

            break;
        case 'Personal':

            break;
        case 'Showers':

            break;
        case 'Parties':

            break;
        case 'Animals':

            break;
        case 'Kids':

            break;
        case 'Families':

            break;

        default:
            break;
    };



    return (
        <div className='gdcontainer'>
            <div className='grid'>

                {albumInformation.map((page) => (
                    <div class='gallery__item view-first'>
                        <Link
                            to={page.href}
                            onClick={() => setAlbumHandler({
                                name: albumHandler.name,
                                description: albumHandler.description
                            })}
                            state={{
                                name: `${page.pageName}`,
                                description: `${page.description}`
                            }}
                        >
                            <img src={page.src} class="gallery__img" alt={page.alt}></img>
                            <div className='infoContainer mask'>
                                <div className='pageName'>{page.pageName}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryAlbumDisplay;
