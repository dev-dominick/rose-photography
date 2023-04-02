import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import '../styles/drawer.css'




export default function NavDrawer() {

    const pages = [
        { title: 'Home', to: '/' },
        { title: 'About Me', to: '/about' },
        { title: 'Pricing', to: '/pricing' },
        { title: 'Contact', to: '/contact' },
    ]

    const [state, setState] = React.useState({
        right: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleDrawerOpen = () => {
        setAnchorEl(true);
    };

    const handleDrawerClose = () => {
        setAnchorEl(false);
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <a className="navLogoContainerDrawerView" href="/">
                    <img className="navLogoDrawer" src={require('../assets/logos/logoTransparDark.png')} alt='nature'></img>
                </a>
                <div className='drawerUnderLine'></div>
                {pages.map(({ title, to }) => (
                    <ListItem key={title} disablePadding>
                        <ListItemButton
                            onClick={handleDrawerClose}
                            component={Link}
                            to={to}
                        >
                            <ListItemText
                                primary={title}
                                sx={{
                                    textAlign: 'center !important',
                                    padding: 'px !important',
                                    gap: 'rem !important',
                                    // border: '1px solid black',
                                    // marginTop: '1rem !important',
                                    // marginBottom: '1rem !important',
                                    // fontFamily: 'monospace,sans-serif !important',
                                    fontSize: '2rem !important',
                                    lineHeight: '1.25 !important',
                                    // marginTop: '0rem !important',
                                    // marginBottom: '0rem !important',

                                }}
                            />
                        </ListItemButton>
                    </ListItem>


                ))}
            </List>

        </Box>
    );


    return (
        <div>

            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                onClose={handleDrawerClose}
                color="info"
                sx={{
                    display: { sm: 'block', md: 'none', lg: '', }
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='right'
                open={anchorEl}
                onClose={handleDrawerClose}
                sx={{
                    // "& .MuiPaper-root": {
                    //     backgroundColor: 'red !important !important'
                    // },
                    "& .MuiDrawer-paper": {
                        backgroundColor: 'white !important'
                    },
                }}
            >
                {list(state)}
            </Drawer>

        </div>
    );
}
