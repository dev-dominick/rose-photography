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

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: 'rgb(137, 138, 166)',
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: 'rgb(201, 187, 207)',
//     },
//     accent: {
//       main: 'rgb(214, 239, 237)'
//     },
//     accentCompliment: {
//       main: 'rgb(183, 211, 223)'
//     }
//   },
// });

const NavButton = styled(ButtonUnstyled)({
  boxShadow: 'none',

  fontFamily: 'sans-serif',

  fontWeight: 'bold',

  // fontSize: { xs: "", sm: "", md: "'1rem'", lg: "'1.5rem'", xl: "'3rem'", },

  fontSize: '1.2rem',
  textDecoration: 'none',
  color: 'black',
  transition: 'all 150ms ease',
  cursor: 'pointer',
  padding: ".5rem 0.5rem 0.5rem 0.5rem",
  margin: '0.9rem 1.5rem 2rem 1.5rem',

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






  return (
      <AppBar
        // color='primary'
        sx={{
          backgroundColor: 'pink !important'
        }}
      >
        <Container
          maxWidth="x1"
          sx={{
            padding: "1rem",
            // alignContent: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
            // alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
            // flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
            // height: { xs: "", sm: "", md: "5rem", lg: "5rem", xl: "5rem", },
            // justifyContent: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },

          }}
        >
          <Toolbar
            // disableGutters
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
              flexDirection: { xs: "row-reverse", sm: "row-reverse", md: "row", lg: "row", xl: "row" },
            }} >

            {/* Menu Icon for mobile */}
            < NavDrawer />

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

            {/* mobile header: Dev Dominick */}
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
              sx={{
                padding: 1,
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex", },
                paddingRight: { sm: "none", md: "0rem", lg: "5rem", xl: "8rem" },
                // flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
                // alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
                // height: { xs: "", sm: "", md: "5rem", lg: "5rem", xl: "5rem", },
                justifyContent: { xs: "", sm: "", md: "flex-end", lg: "flex-end", xl: "flex-end", },
              }}
            >

              {/* About Me Button */}
              <NavButton
                color='secondary'
                className="toUnderline"
                key="about"
                component={Link}
                to="about"
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
                About Me
              </NavButton>

              {/* Gallery Button */}
              <NavButton
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
                Gallery
              </NavButton>

              {/* Pricing Button */}
              <NavButton
                color='secondary'

                className="toUnderline"
                key="pricing"
                component={Link}
                to="/pricing"
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
                Pricing
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
                Contact Me
              </NavButton>

            </Box>

          </Toolbar>

        </Container>

      </AppBar>
    // </ThemeProvider>
  );
}
