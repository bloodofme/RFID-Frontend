
import React, { useState } from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../../themes/themes'
import dataDummy from '../../resources/dummyCard.json';

import ReadCard from './readCard';


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
    //<DisplayCardData blocks={dataDummy.blocks} />
    return (
        <Box alignItems="center" justifyContent="center">
            <Box padding={12} sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent:"center", }}>
                <Card variant="outlined" sx={{ minWidth: 700, maxWidth: 1200, justifyContent:"center", alignItems: 'center' }}>
                  <CardContent>
                    <ReadCard />
                  </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

export default WebUI;