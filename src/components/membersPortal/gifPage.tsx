import React from 'react';
import { useNavigate } from 'react-router-dom';

import buttontheme from '../../themes/buttontheme'
import Typography from '@mui/material/Typography';

import { Stack, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import themes from '../../themes/themes'
import gif from '../../resources/heh.gif'

function GifPage(): React.JSX.Element {
const navigate = useNavigate();

const handleClick = () => {
    navigate('/members');
};

  return (
    <Stack 
        direction="column" 
        alignItems="center" 
        justifyContent="center" 
        spacing={2} 
        sx={{ height: '90vh' }}
    >
        <img src={gif} alt="Your GIF" />
        <ThemeProvider theme={buttontheme}>
        <Button variant="contained" onClick={handleClick}>
            <ThemeProvider theme={themes}>
            <Typography variant='h2'>Members Page</Typography>
            </ThemeProvider>
        </Button>
        </ThemeProvider>
  </Stack>
  
  );
};

export default GifPage;
