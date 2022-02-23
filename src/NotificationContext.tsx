import React, { useState, createContext }from 'react';
import {AlertColor} from '@mui/material/Alert'


interface NotificationContextInterface {
  open: boolean;
  message: string;
  type: AlertColor
}

export const defaultNotification: NotificationContextInterface = {
  open: false,
  message: '',
  type: 'success'
};

export const NotificationContext = createContext({
    notification : defaultNotification, 
    setNotification : (_: unknown) => {}
});

export const NotificationProvider = ({children} : any) => {
    const [contextNotification, setContextNotification] = useState(defaultNotification);

    const contextValue = { notification: contextNotification, setNotification: (value: any) => setContextNotification(value)};
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};

