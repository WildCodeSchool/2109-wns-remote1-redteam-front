import React, {useState} from 'react';
import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

const Snackbar = ({open} : {open: boolean}) => {
  const [, setOpenSnackbar] = useState(false);
  

  const handleClose = () => {
    setOpenSnackbar(false)
  }

  return (
    <div>
    <MuiSnackbar open={open} autoHideDuration={4000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      This is a success message!
    </Alert>
  </MuiSnackbar>
  </div>
  )
}

export default Snackbar;
