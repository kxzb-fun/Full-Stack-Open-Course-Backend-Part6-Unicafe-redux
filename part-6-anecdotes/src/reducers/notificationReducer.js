import { createSlice } from '@reduxjs/toolkit';


const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        // NB return action.payload
        clearNotification: () => initialState,
        setNotification: (state, action) => action.payload
    }
})

export const { setNotification, clearNotification} = notificationSlice.actions;

// 创建一个异步的 action creator
export const setNotificationWithTimeout = (message, duration) => {
    return dispatch => {
        // 设置通知
        dispatch(setNotification(message));

        // 设定时间后清除通知
        setTimeout(() => {
            dispatch(clearNotification());
        }, duration * 1000);
    };
};

export default notificationSlice.reducer