import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface TextFieldProps {
  name: string,
  type: string
}

function TextFields({name, type}: TextFieldProps): JSX.Element {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label={name} type={type} variant="outlined" />
    </Box>
  );
}

export default TextFields;