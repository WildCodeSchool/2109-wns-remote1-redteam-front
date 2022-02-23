import * as React from 'react';
import {Button as MuiButton} from '@mui/material';
import Stack from '@mui/material/Stack';

interface ButtonProps {
  name : string;
  action: () => void;
}

 function Button({name, action} : ButtonProps): JSX.Element {
  return (
    <Stack direction="row" spacing={2}>
      <MuiButton onClick={action} variant="contained">{name}</MuiButton>
    </Stack>
  );
}

export default Button;