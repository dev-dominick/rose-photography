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
      <h1 className="pageHeader">Contact Me</h1>

      <div className="contactContainer">

        <div className="contactInfoBox">
          < EmailIcon />
          <h5 className="contactInfoText">Email Me!</h5>
          <h6 className="contactInfoText">------ Heather's Email -------</h6>
        </div>

        <div className="contactInfoBox">
          < LocationOnIcon />
          <h5 className="contactInfoText">Located in</h5>
          <h6 className="contactInfoText">Greater Philadelphia Area</h6>
        </div>

        <div className="contactInfoBox">
          < Socials />
          <h5 className="contactInfoText">Reach out on social media</h5>
        </div>

      </div>

      < ContactForm />

    </div>
  );
}

export default Contact;

