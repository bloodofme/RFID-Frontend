import React from 'react';

import { TextField } from '@mui/material';

interface Props{
    title: string;
    defaultValue: string;
    value: string;
}

function OutputField({title, defaultValue, value}: Props): React.JSX.Element {
    return (
        <TextField
            label={title}
            defaultValue={defaultValue}
            variant="outlined"
            value={value}
            slotProps={{
                input: {
                    readOnly: true,
                },
            }}
            fullWidth
        />
    );
}

export default OutputField;
