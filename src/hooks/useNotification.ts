import { useContext } from 'react';
import { NotificationContext } from '../NotificationContext';

const useNotification = () => {
  const { notification, setNotification } = useContext(NotificationContext);

  return {
    notification,
    setNotification,
  };
}

export default useNotification;