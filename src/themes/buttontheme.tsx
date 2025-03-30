import { createTheme } from '@mui/material/styles';

const buttontheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          maxWidth: '400px',
          maxHeight: '50px',
          minWidth: '200px',
          minHeight: '40px',
          backgroundColor: '#a0d2eb',
          '&:hover': {
            backgroundColor: '#a0d2eb',
          },
        },
      },
    },
  },
});

export default buttontheme;