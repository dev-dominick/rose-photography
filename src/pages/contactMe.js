import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/contactMe.css";
import '../App.css'
import Socials from "../components/socials";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {

  return (
    <div className="contact main">
      <header className="welcomeBanner">
        <h1 className="bannerText">Contact Me</h1>
      </header>

      <div className="contactContainer">
        <div className="contactInfoBox">
          <EmailIcon />
          <h5 className="contactInfoText">Email Me!</h5>
          <h6 className="contactInfoText">Heather.marinari@gmail.com</h6>
        </div>

        <div className="contactInfoBox">
          <LocationOnIcon />
          <h5 className="contactInfoText">Located in</h5>
          <h6 className="contactInfoText">South Jersey</h6>
        </div>

        <div className="contactInfoBox">
          <Socials />
          <h5 className="contactInfoText">Check out my socials</h5>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;

