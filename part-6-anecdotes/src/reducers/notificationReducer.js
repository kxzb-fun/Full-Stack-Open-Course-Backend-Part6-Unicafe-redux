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
export default notificationSlice.reducer