import React, { createContext, useReducer, useContext } from 'react';

// 定义通知类型
const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { message: action.payload, visible: true };
    case 'CLEAR_NOTIFICATION':
      return { message: '', visible: false };
    default:
      return state;
  }
};

// 创建上下文
const NotificationContext = createContext();

// 提供器组件
export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, {
    message: '',
    visible: false
  });

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

// 自定义 hook，方便在组件中使用
export const useNotification = () => useContext(NotificationContext);
