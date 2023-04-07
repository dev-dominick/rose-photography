import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link, useLocation } from "react-router-dom";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import "../styles/navbar.css";
import NavDrawer from "./Drawer";
import '../styles/navbar.css'


const NavButton = styled(ButtonUnstyled)({
  boxShadow: 'none',
  fontFamily: 'Frank Ruhl Libre',
  // fontWeight: 'bold',
  // fontSize: { xs: "", sm: "", md: "'1rem'", lg: "'1.5rem'", xl: "'3rem'", },
  fontSize: { sm: '1rem', md: '1.5rem', lg: '2rem' },
  textDecoration: 'none',
  color: 'black',
  transition: 'all 150ms ease',
  cursor: 'pointer',
  //   padding: ".5rem 0.5rem 0.5rem 0.5rem",
  //   margin: '0.9rem 1.5rem 2rem 1.5rem',

  '&:hover': {
    textDecoration: 'underline',
    color: 'black',
  },
});

// const FullScreenHeaderSx = {
//   margin: '.9rem 1.5rem 2rem 1.5rem',
//   padding: '.5rem 0.5rem 0.5rem 0.5rem',
//   display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex", },
//   paddingLeft: { sm: "none", md: "0rem", lg: "5rem", xl: "8rem" },
//   fontFamily: "monospace",
//   fontSize: '2rem',
//   fontWeight: 700,
//   letterSpacing: ".3rem",
//   color: "white",
//   textDecoration: 'none',
//   // flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
//   // alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
//   // height: { xs: "", sm: "", md: "5rem", lg: "5rem", xl: "5rem", },
//   // justifyContent: { xs: "", sm: "", md: "flex-end", lg: "flex-end", xl: "flex-end", },
  
//   '&:hover': {
//     textDecoration: 'underline',
//   }
// };

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();



  // set this useEffect to add style on button of page you are on
  React.useEffect(() => {
    // which page the app is routed too
    let page = location.pathname;
    let pageName = "https://dominickthedev.com" + page;
    // selecting element by class 
    const id = document.getElementsByClassName("toUnderline");
    // looping over the 3 IDs
    // if pagename = the page with that id, styles will be applied
    for (let i = 0; i < id.length; i++) {
      if (pageName === id[i].href) {
        console.log(id[i].href);
        id[i].style.boxShadow = '0 0 0 0.2rem rgba(238,255,4)';

        // id[i].style.textDecoration = "underline";
        // id[i].style.textDecorationColor = "#eeff04";
      } else {

        id[i].style.boxShadow = '0 0 0 0 transparent';

        // id[i].style.textDecoration = "underline";
        // id[i].style.textDecorationColor = "transparent";

      }
    }
  });

  React.useEffect(() => {
    // setting to check if script is being run in webpage
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        // assigning value verticle scroll to check if page has been scrolled
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos === 0) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
      };
    }
  });




  return (
    <AppBar
      sx={{
        backgroundColor: scrolled ? "white !important" : "white !important",
        boxShadow: scrolled ? "black !important" : "none !important",
        // boxShadow: 'black !important',
        height: { sm: "11rem !important", md: "11rem !important", lg: '11rem !important', xl: '16rem !important' },
        // border: "2px solid grey !important",
        paddingTop: "0rem !important"
      }}
    >
      <Container
        maxWidth="x1"
        sx={{
          padding: "0rem",
          // border: "1px solid green !important",

          // alignContent: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
          // alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
          // flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
          // height: { xs: "", sm: "", md: "5rem", lg: "5rem", xl: "5rem", },
          // justifyContent: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },

        }}
      >
        <Toolbar
          disableGutters
          sx={{
            // border: "1px solid purple !important",

            height: "100% !important",
            display: { xs: "flex", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
            // gap:  '5rem !important' ,
            justifyContent: { xs: "space-between"}, 
            flexDirection: { xs: "row-reverse", sm: "row-reverse", md: "column", lg: "column", xl: "column" },
          }} >

          {/* Menu Icon for mobile */}
          <div className="testing">
            < NavDrawer sx={{ backgroundColor: 'black !important' }} />
          </div>

          <a className="navLogoContainerMainApp" href="/">
            <img className="navLogoMainApp" src={require('../assets/logos/logoTransparDark.png')} alt='nature'></img>
          </a>

          {/* header for full screen: Dominick The Dev */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={FullScreenHeaderSx}
          >
            Dominick The Dev
          </Typography> */}

          {/* mobile header: Dev Dominick */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".01rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dev Dominick
          </Typography> */}

          {/* buttons for full screen */}
          <Box
            sx={{
              padding: 1,
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex", },
              paddingRight: { sm: "none", md: "", lg: "", xl: "" },
              // flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
              // alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
              // height: { xs: "", sm: "", md: "5rem", lg: "5rem", xl: "5rem", },
              justifyContent: { xs: "", sm: "", md: "", lg: "", xl: "", },
              gap: '4rem'
            }}
          >

            {/* Home Button */}
            <NavButton
              className="toUnderline"
              key="/"
              component={Link}
              to="/"
              sx={{
                display: "flex",
                // padding: {
                //   xs: "none",
                //   sm: "none",
                //   md: ".5rem 0.5rem 0.5rem 0.5rem",
                //   lg: ".5rem 0.5rem 0.5rem 0.5rem",
                //   xl: ".5rem 0.5rem 0.5rem 0.5rem",
                // },

                margin: {
                  xs: "none",
                  sm: "none",
                  md: '1rem',
                  lg: '',
                  xl: '',
                },
              }}
            >
              Home
            </NavButton>

            {/* About Me Button */}
            <NavButton
              className="toUnderline"
              key="about"
              component={Link}
              to="about"
              sx={{
                display: "flex",

                // padding: {
                //   xs: "none",
                //   sm: "none",
                //   md: ".5rem 0.5rem 0.5rem 0.5rem",
                //   lg: ".5rem 0.5rem 0.5rem 0.5rem",
                //   xl: ".5rem 0.5rem 0.5rem 0.5rem",
                // },

                margin: {
                  xs: "none",
                  sm: "none",
                  md: '1rem',
                  lg: '',
                  xl: '',
                },
              }}
            >
              About Me
            </NavButton>

            {/* Pricing Button */}
            <NavButton
              className="toUnderline"
              key="pricing"
              component={Link}
              to="/pricing"
              variant="contained"
              sx={{
                display: "flex",

                // padding: {
                //   xs: "none",
                //   sm: "none",
                //   md: ".5rem 0.5rem 0.5rem 0.5rem",
                //   lg: ".5rem 0.5rem 0.5rem 0.5rem",
                //   xl: ".5rem 0.5rem 0.5rem 0.5rem",
                // },

                margin: {
                  xs: "none",
                  sm: "none",
                  md: '1rem',
                  lg: '',
                  xl: '',
                },
              }}
            >
              Pricing
            </NavButton>

            {/* Contact Me Button */}
            <NavButton

              className="toUnderline"
              key="contact"
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                display: "flex",

                // padding: {
                //   xs: "none",
                //   sm: "none",
                //   md: ".5rem 0.5rem 0.5rem 0.5rem",
                //   lg: ".5rem 0.5rem 0.5rem 0.5rem",
                //   xl: ".5rem 0.5rem 0.5rem 0.5rem",
                // },

                margin: {
                  xs: "none",
                  sm: "none",
                  md: '1rem',
                  lg: '',
                  xl: '',
                },
              }}
            >
              Contact Me
            </NavButton>

          </Box>

        </Toolbar>

      </Container>

    </AppBar>
  );
}
