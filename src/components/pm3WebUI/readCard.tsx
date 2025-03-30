import React, {useState} from 'react';

import { Grid2, Stack, Button, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import buttontheme from '../../themes/buttontheme'
import themes from '../../themes/themes'

function Authenticate(): React.JSX.Element {
    const [data, setData] = useState<string[]>([]);
    const [blkNo, setBlkNo] = useState<string>("");
    const [key, setKey] = useState<string>("");
    const [hexData, setHexData] = useState<string>("");

    const handleInputChangeBlkNo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBlkNo(event.target.value);
    };

    const handleInputChangeHexData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHexData(event.target.value);
    };

    const handleInputChangeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKey(event.target.value);
    };
    
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
        <Grid2 container spacing={0} sx={{ overflow: 'hidden' }}>
            <Stack sx={{
                    display: 'flex',
                    gap: '25px'
                }}> 
                    <ThemeProvider theme={themes} >
                        <Typography variant='h1'>Verify your card</Typography>
                    </ThemeProvider>
                    <TextField
                        label="Blk No"
                        variant="outlined"
                        value={blkNo}
                        onChange={handleInputChangeBlkNo}
                        
                    />
                    <TextField
                        label="Block Data"
                        variant="outlined"
                        value={hexData}
                        onChange={handleInputChangeHexData}
                        fullWidth
                    />
                    <TextField
                        label="Key"
                        variant="outlined"
                        value={key}
                        onChange={handleInputChangeKey}
                        
                    />
                    <ThemeProvider theme={buttontheme} >
                        <Button variant="contained" onClick={handleButtonClick}>
                            <ThemeProvider theme={themes}>
                                <Typography variant='h2'>Read Card</Typography>
                            </ThemeProvider>
                        </Button>
                    </ThemeProvider>
                </Stack>
        </Grid2>
    );
}

export default Authenticate;
