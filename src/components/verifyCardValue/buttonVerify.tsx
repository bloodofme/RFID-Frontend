import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import buttontheme from '../../themes/buttontheme'
import themes from '../../themes/themes'

interface Props{
    blkNo: string;
    hexData: string;
}

function ButtonVerify({blkNo, hexData}: Props): React.JSX.Element {
  const handleButtonClick = async() => {
    try {
        // Construct the URL with query parameters
        const url = `http://127.0.0.1:5000/verify_card?input=${blkNo}&param1=${hexData}`;
  
        // Send GET request to Flask backend
        const response = await fetch(url, {
          method: "GET",
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Response data:", data);
        } else {
          console.error("Failed to fetch data from Flask API");
        }
      } catch (error) {
        console.error("Error:", error);
      }
  }

  return (
    <Box display="flex" justifyContent="center" width="100%">
        <ThemeProvider theme={buttontheme} >
                <Button variant="contained" onClick={handleButtonClick}>
                    <ThemeProvider theme={themes}>
                        <Typography variant='h2'>Verify</Typography>
                    </ThemeProvider>
                </Button>
        </ThemeProvider>
    </Box>
  );
}

export default ButtonVerify;