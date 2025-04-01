import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['"Roboto"', 'Fira Code'].join(','),
    h1: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      fontSize: '3rem',
      fontFamily: 'Roboto',
      color: '#494D5F',
    },
    h2: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      fontSize: '1.3rem',
      fontFamily: 'Roboto',
      color: '#FFFFFF',
    },
    h3: {
      display: 'flex',
      fontSize: '1.6rem',
      fontFamily: 'Roboto',
      color: '#494D5F',
    },
    h4: {
      display: 'flex',
      fontSize: '1.3rem',
      fontFamily: 'Roboto',
      color: '#494D5F',
    },
    h5: {
      display: 'flex',
      fontSize: '1.3rem',
      fontFamily: 'Fira Code',
      color: '#494D5F', 
    },
    h6: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      fontSize: '1.2rem',
      fontFamily: 'Roboto',
      color: '#494D5F',
    },
  },
});

export default theme;
