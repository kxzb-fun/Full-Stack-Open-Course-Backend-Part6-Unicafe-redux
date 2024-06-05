import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationReducer";
// 使用 Redux Toolkit 的 configureStore 函数来创建存储，而不是使用 Redux 的 createStore 函数
// configureStore功能有许多额外的好处，例如无需额外配置即可轻松集成开发工具和许多常用库。
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  },
});

export default store;
