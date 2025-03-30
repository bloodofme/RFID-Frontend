import React from 'react';

import buttontheme from '../../themes/buttontheme'
import themes from '../../themes/themes'
import Typography from '@mui/material/Typography';

import { Box, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

function ButtonSubmit(): React.JSX.Element {
  
  const handleButtonClick = async() => {
    try {
        // Construct the URL with query parameters
        const url = `http://127.0.0.1:8080/read_card`;
  
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
                        <Typography variant='h2'>Submit</Typography>
                    </ThemeProvider>
                </Button>
        </ThemeProvider>
    </Box>
  );
}

export default ButtonSubmit;
