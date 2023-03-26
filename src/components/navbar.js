import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';
import "../styles/navbar.css";
import NavDrawer from "./Drawer";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";



const NavButton = styled(ButtonUnstyled)({
  boxShadow: 'none',

  fontFamily: 'sans-serif',

  fontWeight: 'bold',
  // border: '1px solid red',
  // fontSize: { xs: "", sm: "", md: "'1rem'", lg: "'1.5rem'", xl: "'3rem'", },

  fontSize: '1.2rem',
  textDecoration: 'none',
  color: 'black',
  transition: 'all 150ms ease',
  cursor: 'pointer',
  // padding: ".5rem 0.5rem 0.5rem 0.5rem",
  // margin: '0.9rem 1.5rem 2rem 1.5rem',

  '&:hover': {
    textDecoration: 'underline',

  },

  // '&:active': {
  //   backgroundColor: '#eeff04',
  //   boxShadow: 'inset 0 0 13px 3px black!important',
  //   color: 'black',

  // },

  // '&:active:hover': {
  //   backgroundColor: '#eeff04',
  //   boxShadow: 'inset 0 0 13px 3px black!important',
  //   color: 'black',
  // },
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
//     textDecorationColor: '#eeff04'
//   }
// };




export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  // const location = useLocation();

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
      // color='primary'
      sx={{
        border: '11px solid green',
        // backgroundColor: { xs: 'yellow !important', sm: 'yellow !important', md: 'yellow !important', lg: 'yellow !important', xl: 'yellow !important', },
        backgroundColor: scrolled ? 'orange !important' : 'red !important',
        boxShadow: scrolled ? 'black !important' : 'yellow !important',
        height: { xs: "", sm: "", md: "12rem", lg: "12rem", xl: "12rem", },
        width: '100% !important'
        // display: 'flex', flexDirection: 'column'
      }}
    >
      <Container
        maxWidth="x1"
        sx={{
          // height: '50% !important',
          // padding: "1rem",
          alignContent: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
          alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
          flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
          height: { xs: "", sm: "20rem", md: "20rem", lg: "100%", xl: "100%", },
          justifyContent: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },

        }}
      >
        {/* app content container */}
        <Toolbar
          disableGutters
          className="toolbarCon"
          sx={{
            height: '100%',
            display: { xs: "flex", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
            flexDirection: { xs: "row-reverse", sm: "row-reverse", md: "row", lg: "column", xl: "column" },
            alignItems: 'center'
          }} >

          {/* Menu Icon for mobile */}
          {/* <div className="mobileNavButton">
           < NavDrawer />
          </div> */}
          

          <a className="navLogoContainer" href="/">
            <img className="navLogo" src={require('../assets/logos/logoTransparDark.png')} alt='nature'></img>
          </a>

          {/* header for full screen
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
            >
              Rose Photography
            </Typography> */}

          {/* mobile header */}
          <Typography
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
            Mobile Name
          </Typography>

          {/* buttons for full screen */}
          <Box
            className="boxCon"
            sx={{
              gap: '3rem',
              border: "1px solid black !important",
              // paddingTop: '5rem',
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex", },
              // paddingRight: { sm: "none", md: "0rem", lg: "5rem", xl: "8rem" },
              flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
              alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
              height: { xs: "", sm: "", md: "1rem", lg: "1rem", xl: "1rem", },
              justifyContent: { xs: "", sm: "", md: "flex-end", lg: "flex-end", xl: "flex-end", },
            }}
          >

            <NavButton
              color='secondary'
              className="toUnderline"
              key="home"
              component={Link}
              to="/"
              variant="contained"
              sx={{
                // padding: {
                //   xs: "none",
                //   sm: "none",
                //   md: ".5rem .5rem .5rem .5rem",
                //   lg: ".5rem .5rem .5rem .5rem",
                //   xl: ".5rem .5rem .5rem .5rem",
                // },

                margin: {
                  xs: "none",
                  sm: "none",
                  md: '0.5rem .5rem .5rem .5rem',
                  lg: '0.5rem .5rem .5rem .5rem',
                  xl: '0.5rem .5rem .5rem .5rem',
                },
              }}
            >
              HOME
            </NavButton>

            {/* About Me Button */}
            <NavButton
              color='secondary'
              className="toUnderline"
              key="about"
              component={Link}
              to="about"
              variant="contained"
              sx={{
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
                  md: '0.5rem .5rem .5rem .5rem',
                  lg: '0.5rem .5rem .5rem .5rem',
                  xl: '0.5rem .5rem .5rem .5rem',
                },
              }}
            >
              ABOUT ME
            </NavButton>

            {/* Gallery Button */}
            {/* <NavButton
              color='secondary'

              className="toUnderline"
              key="gallery"
              component={Link}
              to="/gallery"
              variant="contained"
              sx={{
                padding: {
                  xs: "none",
                  sm: "none",
                  md: ".5rem 0.5rem 0.5rem 0.5rem",
                  lg: ".5rem 0.5rem 0.5rem 0.5rem",
                  xl: ".5rem 0.5rem 0.5rem 0.5rem",
                },

                margin: {
                  xs: "none",
                  sm: "none",
                  md: '0.9rem .5rem 2rem .5rem',
                  lg: '0.9rem 1.5rem 2rem 1.5rem',
                  xl: '0.9rem 1.5rem 2rem 1.5rem',
                },
              }}
            >
              GALLERY
            </NavButton> */}

            {/* Pricing Button */}
            <NavButton
              color='secondary'

              className="toUnderline"
              key="pricing"
              component={Link}
              to="/pricing"
              variant="contained"
              sx={{
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
                  md: '0.5rem .5rem .5rem .5rem',
                  lg: '0.5rem .5rem .5rem .5rem',
                  xl: '0.5rem .5rem .5rem .5rem',
                },
              }}
            >
              PRICING
            </NavButton>

            {/* Contact Me Button */}
            <NavButton
              color='secondary'

              className="toUnderline"
              key="contact"
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
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
                  md: '0.5rem .5rem .5rem .5rem',
                  lg: '0.5rem .5rem .5rem .5rem',
                  xl: '0.5rem .5rem .5rem .5rem',
                },
              }}
            >
              CONTACT ME
            </NavButton>

          </Box>

        </Toolbar>

      </Container>

    </AppBar>
  );
}
