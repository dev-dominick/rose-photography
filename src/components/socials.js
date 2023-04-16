import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/socials.css'


const styles = {
  footerStyle: {
    // position: 'fixed',
    // bottom: '0px',
    // width: '100%',
    backgroundColor: 'transparent',
    // marginBottom: '1rem'
    textDecoration: 'none',
  },
  icon: {
    '& .MuiBottomNavigationAction-root': {
      // color: 'black !important',
      width: '1px'
    },
    "& .Mui-selected,  svg": {
      color: "white",
      showLabel: 'false'

    }
  }
}





export default function Socials() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  return (
    <BottomNavigation
      style={styles.footerStyle}
      // sx={{   display: 'flex', justifyContent: 'center' }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        sx={styles.icon}
        href="https://www.facebook.com/people/Rose-Photography/100085101992994/?mibextid=LQQJ4d"
        target="_blank"
        // label="GitHub"
        value="FaceBook"
        icon={<FacebookIcon />}
      />
      <BottomNavigationAction
        sx={styles.icon}
        href="https://www.instagram.com/rose_vocals_photography/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
        // label="LinkedIn"
        value="Instagram"
        icon={<InstagramIcon />}
      />
    </BottomNavigation>
  );
}

