import * as React from 'react';
import {Button as MuiButton} from '@mui/material';
import Stack from '@mui/material/Stack';

interface ButtonProps {
  txt : string
}

 function Button({txt} : ButtonProps): JSX.Element {
  return (
    <Stack direction="row" spacing={2}>
      <MuiButton variant="contained">{txt}</MuiButton>
    </Stack>
  );
}

export default Button;