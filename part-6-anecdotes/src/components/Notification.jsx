import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '../reducers/notificationReducer';

const Notification = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.notification);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div style={{
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }}>
      {message}
    </div>
  );
};

export default Notification;
