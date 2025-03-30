import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import data from '../../resources/heh.json'
import theme from '../../themes/themes'

import MemberCard from './memberCard';

function VerticalTabs() {
  return (
    <Box alignItems="center" justifyContent="center">
        <Box padding={6} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ThemeProvider theme={theme} >
                <Typography variant='h1'>Our Team</Typography>
            </ThemeProvider>
        </Box>
        {data.data.map((item) => (
            <MemberCard name={item.name} role={item.role} email={item.email} description={item.description}/>
        ))}
    </Box>
  );
}

export default VerticalTabs;