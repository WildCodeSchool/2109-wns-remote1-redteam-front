import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface BtnProps {
  txt : string
}

 function BtnComponent({txt} : BtnProps): JSX.Element {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">{txt}</Button>
    </Stack>
  );
}

export default BtnComponent;