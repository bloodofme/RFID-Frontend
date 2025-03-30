import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { Grid2, Typography } from '@mui/material';

import theme from '../themes/themes'

function Instructions(): React.JSX.Element {
    
    return (
        <Grid2 container spacing={0} sx={{ overflow: 'hidden' }}>
            <ThemeProvider theme={theme} >
                <Typography variant='h1'>Instructions</Typography>
            </ThemeProvider>       
        </Grid2>
    );
}

export default Instructions;
