import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        h1: {
            display:"flex",
            fontSize: '3rem',
            fontFamily: 'Roboto',
            color: '#494D5F'
        },
        h2: {
            display:"flex",
            fontSize: '1.5rem',
            fontFamily: 'Roboto',
            color: '#A0D2EB'
        },
        h3: {
            display:"flex",
            fontSize: '1.3rem',
            fontFamily: 'Roboto',
            color: '#A28089'
        },
        h4: {
            display:"flex",
            fontSize: '1.3rem',
            fontFamily: 'Roboto',
            wordBreak: "break-word",
            overflowWrap: "break-word",
            maxWidth: "500px",
            color: '##FFFFFF'
        }
    }
});

export default theme;
