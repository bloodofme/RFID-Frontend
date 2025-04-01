import React, {useState} from 'react';

import { Box, Grid2, Stack, Button, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import buttontheme from '../../themes/buttontheme'
import themes from '../../themes/themes'

import DisplayCardData from './displayCardData';
import dataDummy from '../../resources/dummyCard.json';

function ReadCard(): React.JSX.Element {
    const [status, setStatus] = useState<string>("success");
    const [blk, setBlk] = useState<string>("4");

    const handleInputChangeBlkNo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBlk(event.target.value);
    };
    
    const handleButtonClickRead = async() => {
        try {
            // Construct the URL with query parameters
            const url = `http://127.0.0.1:5000/verify_card?input=${blk}`;
      
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
        <Grid2 container spacing={3} sx={{ overflow: 'hidden', alignItems: "center", justifyContent: "center" }}>
            <ThemeProvider theme={themes} >
                    <Typography variant='h1'>Read Card Sector</Typography>
                </ThemeProvider>
                <Stack sx={{
                    display: 'flex',
                    gap: '25px',
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }}> 
                
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'center',
                    justifyContent: "center",
                    gap: 2, 
                    width: '100%',
                }}
                >
                <TextField
                    label="Block Number [0-15]"
                    variant="outlined"
                    value={blk}
                    onChange={handleInputChangeBlkNo}
                />
                <ThemeProvider theme={buttontheme} >
                    <Button variant="contained" onClick={handleButtonClickRead}>
                        <ThemeProvider theme={themes}>
                            <Typography variant='h2'>Read Card</Typography>
                        </ThemeProvider>
                    </Button>
                </ThemeProvider>
                </Box>
                <DisplayCardData blocks={dataDummy.blocks} />
            </Stack>
            
        </Grid2>
    );
}

export default ReadCard;
