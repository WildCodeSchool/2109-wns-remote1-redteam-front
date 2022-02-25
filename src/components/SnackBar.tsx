import React, { useState } from "react";
import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
import useNotification from "../hooks/useNotification";

const Snackbar = () => {
  const { notification, setNotification } = useNotification();

  const handleClose = () => {
    setNotification({
      open: false,
      message: "",
      type: "success",
    });
  };

  return (
    <div>
      <MuiSnackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={notification.type}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};

export default Snackbar;
