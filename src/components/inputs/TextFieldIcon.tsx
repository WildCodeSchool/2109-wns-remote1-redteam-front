import React, {ChangeEventHandler}  from 'react';
import {Box, InputAdornment, TextField} from '@mui/material'


interface TextFieldProps {
   label: string;
    name: string;
    type: string;
    icon: JSX.Element;
    onChange: ChangeEventHandler<HTMLInputElement>;
    multiline?: boolean;
    rows?: number;
  }

function TextFieldIcon ({name, label, type, onChange, multiline, icon, rows}: TextFieldProps) : JSX.Element { 
    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField 
                    name={name}
                    label={label} 
                    type={type} 
                    variant="outlined" 
                    multiline={multiline} 
                    rows={rows}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            {icon}
                            </InputAdornment>
                        ),
                    }}
                    onChange={onChange}
                />
            </Box>
        </div>
    )
}

export default TextFieldIcon;


TextFieldIcon.defaultProps = {
  multiline: false,
  rows: 5,
}