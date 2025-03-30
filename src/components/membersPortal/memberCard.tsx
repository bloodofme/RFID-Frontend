import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, IconButton } from '@mui/material';

import Typography from '@mui/material/Typography';

import memberIntro from '../../themes/memberIntro';
import myImage from '../../resources/goons.jpg';
import PhoneIcon from '@mui/icons-material/Phone';

interface Props {
    name: string;
    role: string;
    email: string;
    description: string;
}

function MemberCard({name, role, email, description}: Props): React.JSX.Element {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/gif');
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" padding={5}>
            <Avatar
                src={myImage}
                alt="User Avatar"
                sx={{ width: 300, height: 300 }}
            />
            <Box padding={6} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <ThemeProvider theme={memberIntro}>
                        <Typography variant='h1'>{name}</Typography>
                        <IconButton onClick={handleClick} sx={{ color: '#494D5F' }}>
                            <PhoneIcon fontSize="large" />
                        </IconButton>
                    </ThemeProvider>
                </Box>
                <ThemeProvider theme={memberIntro} >
                    <Typography variant='h2'>{role}</Typography>
                </ThemeProvider>
                <ThemeProvider theme={memberIntro} >
                    <Typography variant='h3'>{email}</Typography>
                </ThemeProvider>
                <ThemeProvider theme={memberIntro} >
                    <Typography variant='h4'>{description}</Typography>
                </ThemeProvider>
            </Box>
        </Box>
    );
}

export default MemberCard;
