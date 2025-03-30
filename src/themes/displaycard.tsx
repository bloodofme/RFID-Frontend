import { createTheme } from '@mui/material/styles';
import FiraCode from "../resources/Fira_Code/static/FiraCode-Regular.ttf";


const displaycardtheme = createTheme({
  typography: {
    fontFamily: "Roboto, FiraCode",
    h1: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      fontSize: '3rem',
      fontFamily: 'Roboto',
      color: '#494D5F',
    },
    h2: {
      display: 'flex', // Ensure proper layout
      fontSize: '1.1rem', // Font size for h5
      fontFamily: 'FiraCode', // Apply Fira Code specifically for h5
      color: '#494D5F', // Text color
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'FiraCode';
          src: url(${FiraCode}) format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `,
    },
  },
});

export default displaycardtheme;
