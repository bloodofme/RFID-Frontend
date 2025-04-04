
import React, { useState } from 'react';

import { Box, Card, CardContent } from '@mui/material';

import ReadCard from './readCard';
import WriteCard from './writeCard';


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
            <Box padding={20} sx={{ display: 'flex', alignItems: 'center', justifyContent:"center", }}>
                <Card variant="outlined" sx={{ minWidth: 1200, maxWidth: 1200, justifyContent:"center", alignItems: 'center' }}>
                  <CardContent>
                    <ReadCard />
                  </CardContent>
                </Card>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"center", }}>
                <Card variant="outlined" sx={{ minWidth: 1200, maxWidth: 1200, justifyContent:"center", alignItems: 'center' }}>
                  <CardContent>
                    <WriteCard />
                  </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

export default WebUI;