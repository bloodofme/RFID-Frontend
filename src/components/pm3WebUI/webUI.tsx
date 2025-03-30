
import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../../themes/themes'
import dataDummy from '../../resources/dummyCard.json';

import DisplayCardData from './displayCardData';


function WebUI(): React.JSX.Element {
    const [data, setData] = useState<string[]>([]);

    const handleButtonClick = async() => {
        try {
            // Construct the URL with query parameters
            const url = `http://127.0.0.1:8080/verify_card`;
      
            // Send GET request to Flask backend
            const response = await fetch(url, {
              method: "GET",
            });
      
            if (response.ok) {
              const jsonData = await response.json();
              setData(jsonData);
              console.log("Response data:", data);
            } else {
              console.error("Failed to fetch data from Flask API");
            }
          } catch (error) {
            console.error("Error:", error);
          }
    }

    return (
        <Box alignItems="center" justifyContent="center">
            <Box padding={6} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ThemeProvider theme={theme} >
                    <Typography variant='h1'>Card</Typography>
                </ThemeProvider>
                <DisplayCardData blocks={dataDummy.blocks} />
            </Box>
        </Box>
    );
}

export default WebUI;