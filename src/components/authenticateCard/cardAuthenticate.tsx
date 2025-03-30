import React, { useState } from 'react';

import { Alert, Box, Button, CircularProgress, Grid2, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import OutputField from './outputField';

import buttontheme from '../../themes/buttontheme'
import myImage from '../../resources/building.jpeg';
import themes from '../../themes/themes'

function Authenticate(): React.JSX.Element {
    const [status, setStatus] = useState<string>("success");
    const [name, setName] = useState<string>("John Cena");
    const [role, setRole] = useState<string>("Student");
    const [id, setID] = useState<string>("1389537489");
    const [checksum, setChecksum] = useState<string>("true");
    const [alert, setAlert] = useState({
        severity: "success",
        message: "Authenticated",
    });
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loadingCheck, setLoadingCheck] = useState(false);
    
    const handleButtonClickAuth = async() => {
        setLoadingAuth(true);
        try {
            // Construct the URL with query parameters
            const url = `http://127.0.0.1:8080/authenticate`;
      
            // Send GET request to Flask backend
            const response = await fetch(url, {
              method: "GET",
            });
      
            if (response.ok) {
                const data = await response.json();
                setStatus("success");
                if (status === "success") {
                    setName(data.message.name);
                    setRole(data.message.role);
                    setID(data.message.id);
                    setChecksum(data.is_valid_checksum);
                    
                    if (checksum === "true") {
                        setAlert({
                            severity: "success",
                            message: "Authenticated!",
                        });
                    } else {
                        setAlert({
                            severity: "error",
                            message: "Invalid Checksum!",
                        });
                    }
                } else {
                    setAlert({
                        severity: "error",
                        message: data.message || "Error!",
                    });
                }

                console.log("Response data:", data);
            } else {
                console.error("Failed to fetch data from Flask API");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoadingAuth(false);
        }
    }

    const handleButtonClickCheckValue = async() => {
        setLoadingCheck(true);
        try {
            // Construct the URL with query parameters
            const url = `http://127.0.0.1:8080/display_value`;
      
            // Send GET request to Flask backend
            const response = await fetch(url, {
              method: "GET",
            });
      
            if (response.ok) {
                const data = await response.json();
                setStatus("success");
                if (status === "success") {
                    setName(data.message.name);
                    setRole(data.message.role);
                    setID(data.message.id);
                } else {
                    setAlert({
                        severity: "error",
                        message: data.message || "Error!",
                    });
                }
                console.log("Response data:", data);
            } else {
                console.error("Failed to fetch data from Flask API");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoadingCheck(false); 
        }
    }

    return (
        <Grid2 container spacing={0} sx={{ overflow: 'hidden' }}>
            <Grid2 size={6} sx={{ padding: 2 }} display="flex"  alignItems="center" justifyContent="center">
                <Stack sx={{
                    display: 'flex',
                    gap: '27px',
                    alignItems: 'center'
                }}> 
                    <ThemeProvider theme={themes} >
                        <Typography variant='h1'>Authenticate your card</Typography>
                    </ThemeProvider>
                    <OutputField title="Name" defaultValue="John Cena" value={name}/>
                    <OutputField title="Role" defaultValue="Student" value={role}/>
                    <OutputField title="ID" defaultValue="132567253426" value={id}/>
                    <Alert severity={alert.severity as "success" | "error"} >
                        {alert.message}
                    </Alert>
                    <Box sx={{position: 'relative' }}>
                        <ThemeProvider theme={buttontheme} >
                            <Button variant="contained" onClick={handleButtonClickAuth} disabled={loadingAuth}>
                                <ThemeProvider theme={themes}>
                                    <Typography variant='h2'>Authenticate</Typography>
                                </ThemeProvider>
                            </Button>
                            {loadingAuth && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }}
                            />
                        )}
                        </ThemeProvider>
                    </Box>
                    <Box sx={{position: 'relative' }}>
                        <ThemeProvider theme={buttontheme} >
                            <Button variant="contained" onClick={handleButtonClickCheckValue} disabled={loadingCheck}>
                                <ThemeProvider theme={themes}>
                                    <Typography variant='h2'>Check Value</Typography>
                                </ThemeProvider>
                            </Button>
                            {loadingCheck && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px',
                                    }}
                                />
                            )}
                        </ThemeProvider>
                    </Box>
                </Stack>
            </Grid2>
                <Grid2 size={6} sx={{ padding: 0, height: '100vh' }}>
                    <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                        alt="image"
                        src={myImage}
                    />
                </Grid2>
        </Grid2>
    );
}

export default Authenticate;
