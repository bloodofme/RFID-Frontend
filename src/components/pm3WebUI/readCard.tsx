import React, {useState} from 'react';

import { Alert, Box, Grid2, Stack, Button, InputLabel, Typography, 
  MenuItem, Select, SelectChangeEvent, OutlinedInput, FormControl  } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import buttontheme from '../../themes/buttontheme'
import themes from '../../themes/themes'

import DisplayCardData from './displayCardData';
import dataDummy from '../../resources/dummyCard.json';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sectors = [
    '0', '1', '2', '3', 
    '4', '5', '6', '7', 
    '8','9', '10', '11',
    '12', '13', '14', '15',
];
  

function ReadCard(): React.JSX.Element {
    const [status, setStatus] = useState<string>("success");
    const [blk, setBlk] = useState<string>("");
    const [alert, setAlert] = useState({
            severity: "success",
            message: "Read Success",
        });

    const handleInputChangeBlkNo = (event: SelectChangeEvent<typeof blk>) => {
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
              setStatus(data.status);
              if (status === "success") {
                setAlert({
                  severity: "success",
                  message: "Read Success!",
                });
              } else {
                setAlert({
                  severity: "error",
                  message: data.message || "Error!",
                });
              }
            } else {
              setAlert({
                severity: "error",
                message: "Failed to fetch data from Flask API"
              });
            }
          } catch (error) {
            console.error("Error:", error);
            setAlert({
              severity: "error",
              message: "Error!"
            });
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
                    <FormControl sx={{ m: 1, width: 150 }}>
                        <InputLabel>Sector</InputLabel>
                        <Select
                            value={blk}
                            onChange={handleInputChangeBlkNo}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                        >
                            {sectors.map((sector) => (
                                <MenuItem
                                key={sector}
                                value={sector}
                                >
                                {sector}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
            <Alert severity={alert.severity as "success" | "error"} variant="filled">
              {alert.message}
            </Alert>
        </Grid2>
    );
}

export default ReadCard;
