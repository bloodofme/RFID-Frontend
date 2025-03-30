import React from 'react';

import { CssBaseline, Grid2, Typography} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import theme from '../../themes/displaycard'

interface HexBlocks {
    [key: string]: string;
  }
  
interface HexToAsciiProps {
    blocks: HexBlocks;
}

function DisplayCardData({blocks}: HexToAsciiProps): React.JSX.Element {
    const formatHex = (hex: string): string => {
        let readable = "";

        for (let i = 0; i < hex.length; i += 2) {
            const pair = hex.substring(i, i + 2);
            readable += pair + " ";
        }

        return readable;
    }

    const hexToAscii = (hex: string): string => {
        let readable = "";

        for (let i = 0; i < hex.length; i += 2) {
            const pair = hex.substring(i, i + 2);
            const code = parseInt(pair, 16);
            (code < 32 || code > 126) ?
                readable += "." :
                readable += String.fromCharCode(code);
        }

        return readable
    };
    
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid2 container spacing={2} sx={{ overflow: 'hidden', justifyContent: 'center' }}>
            {Object.entries(blocks).map(([blockKey, hexValue]) => (
            <Grid2 container key={blockKey} spacing={2} alignItems="center">
                {/* Block Number */}
                <Grid2>
                <Typography variant="h2" sx={{ textAlign: 'right' }}>
                    Block {blockKey.padStart(2, '0')}
                </Typography>
                </Grid2>

                {/* Separator */}
                <Grid2>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    |
                </Typography>
                </Grid2>

                {/* Hex Value */}
                <Grid2>
                <Typography variant="h2">{formatHex(hexValue)}</Typography>
                </Grid2>

                {/* Separator */}
                <Grid2>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    |
                </Typography>
                </Grid2>

                {/* ASCII Value */}
                <Grid2>
                <Typography variant="h2">{hexToAscii(hexValue)}</Typography>
                </Grid2>
            </Grid2>
            ))}
      </Grid2>
    </ThemeProvider>
  );

}

export default DisplayCardData;
