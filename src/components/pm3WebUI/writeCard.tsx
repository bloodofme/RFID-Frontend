import React, {useState} from 'react';

import { Button, FormControl, Grid2, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import buttontheme from '../../themes/buttontheme'
import themes from '../../themes/themes'

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

function WriteCard(): React.JSX.Element {
    const [blk, setBlk] = useState<string>("");
    const [key, setKey] = useState<string>("");
    const [hexData, setHexData] = useState<string>("");
    const [isinvalidHexData, setIsInvalidHexData] = useState(true);
    const [helperTextHexData, setHelperTextHexData] = useState("");

    const handleInputChangeBlkNo = (event: SelectChangeEvent<typeof blk>) => {
        setBlk(event.target.value);
    };

    const formatHexDataInput = (input: string) => {
        const cleaned = input.replace(/[^0-9A-Za-z]/g, "");
        const formatted = cleaned.match(/.{1,2}/g)?.join(" ") || "";
        return formatted;
      };

    const validateHex = (input: string) => {
        const hexRegex = /^[0-9A-Fa-f]{16}$/;
        const cleaned = input.replace(/\s/g, "");
        return hexRegex.test(cleaned);
    };

    const handleInputChangeHexData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const formatted = formatHexDataInput(inputValue);
        setHexData(formatted);

        if (inputValue.replace(/\s/g, "").length === 16) {
            if (validateHex(inputValue)) {
                setIsInvalidHexData(false);
                setHelperTextHexData("");
            } else {
                setIsInvalidHexData(true);
                setHelperTextHexData("Invalid hex characters");
            }
          } else {
            setIsInvalidHexData(true);
            setHelperTextHexData(inputValue.length < 16 ? "Must be 16 characters" : "Maximum 16 characters");
          }
    };

    const handleInputChangeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setKey(inputValue);


    };
    
    const handleButtonClick = async() => {
        try {
            const withoutSpaces = hexData.replace(/\s/g, "");

            const url = `http://127.0.0.1:5000/verify_card?input=${blk}&hexData=${withoutSpaces}&key=${key}`;
      
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
        <Grid2 container spacing={0} sx={{ overflow: 'hidden', justifyContent: 'center' }}>
            <Stack sx={{
                    display: 'flex',
                    gap: '25px',
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}> 
                    <ThemeProvider theme={themes} >
                        <Typography variant='h1'>Write Card</Typography>
                    </ThemeProvider>
                    <Grid2 container spacing={2}>
                        <Grid2>
                        <FormControl sx={{ width: 150 }}>
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
                        </Grid2>
                        <Grid2>
                        <TextField
                            label="Key"
                            variant="outlined"
                            value={key}
                            onChange={handleInputChangeKey}
                        />
                        </Grid2>
                    </Grid2>
                    <TextField
                        label="Block Data"
                        variant="outlined"
                        value={hexData}
                        error={isinvalidHexData}
                        onChange={handleInputChangeHexData}
                        fullWidth
                        helperText={helperTextHexData}
                    />
                    <ThemeProvider theme={buttontheme} >
                        <Button variant="contained" disabled={isinvalidHexData || hexData.replace(/\s/g, "").length !== 16} onClick={handleButtonClick}>
                            <ThemeProvider theme={themes}>
                                <Typography variant='h2'>Write Card</Typography>
                            </ThemeProvider>
                        </Button>
                    </ThemeProvider>
                </Stack>
        </Grid2>
    );
}

export default WriteCard;
