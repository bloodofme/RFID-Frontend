import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { Box, Link, Paper, Typography, Stack } from '@mui/material';

import theme from '../../themes/themes'

function Instructions(): React.JSX.Element {
    
    return (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          backgroundColor: '#f5f5f5'
        }}>
          <Paper elevation={3} sx={{ 
            padding: 4, 
            maxWidth: 800, 
            backgroundColor: '#fff',
            borderRadius: 2
          }}>
            <Stack spacing={3}>
              {/* Title Section */}
              <ThemeProvider theme={theme} >
                  <Typography variant="h1" align="center" sx={{ fontWeight: 'bold' }}>
                  RFID Ethical Hacking Booth
              </Typography>
              
              {/* Introduction */}
              <Typography variant="h5">
                Through hands-on exercises, learn about RFID tag data structures, security mechanisms, 
                and read/write operations. The scenario of this exercise is to change a staff's faculty card from a member to another. 
                Understand which parts of the RFID tag you will need to read and edit to spoof this card as your target. 
                There will be 3 components in total that needs to be changed.
              </Typography>
    
              <Typography variant="h3" sx={{ fontWeight: 'medium' }}>
                Exercise Instructions
              </Typography>
              </ThemeProvider>

              {/* Exercise Steps */}
              <Stack component="ol" spacing={2} sx={{ pl: 3 }}>
                <li>
                  <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Roboto', color: '#494D5F', }}>
                  Place your RFID card on the proxmark reader (please leave the card on the reader till the end of the exercise)
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Roboto', color: '#494D5F', }}>
                    Refer to
                    <Link href="<insert URL>"> RFID Structure Guide</Link> for a quick guide to RFID internal structure and 
                    <Link href="http://localhost:3000/members" target="_blank"> Faculty Details</Link> for faculty member details
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Roboto', color: '#494D5F', }}>
                    Navigate to:
                    <Link href="http://localhost:3000/readwrite"> Scan Tag Data</Link> - Specify block numbers for reading
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Roboto', color: '#494D5F', }}>
                    On the same page:<Link href="http://localhost:3000/readwrite"> Edit Tag Data</Link> - Specify block numbers for writing
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Roboto', color: '#494D5F', }}>
                    <Link href="http://localhost:3000/authenticate">Verify Changes</Link> - Confirm your modifications
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Roboto', color: '#494D5F', }}>
                    Get <Link href="<insert url>"> exercise hints</Link> if needed
                  </Typography>
                </li>
              </Stack>
    
              {/* Security Note */}
              <Typography sx={{ fontSize: '1.2rem', fontFamily: 'Roboto', color: '#494D5F', }}>
                Note: This exercise simulates ethical hacking scenarios for educational purposes only.
              </Typography>
            </Stack>
            
          </Paper>
        </Box>
      );
    };


export default Instructions;
