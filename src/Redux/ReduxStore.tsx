import { configureStore } from "@reduxjs/toolkit";
import * as thunk from "redux-thunk";
import reducer from "./ReduxUSersSlice";
// import { RootState, AppDispatch } from './redux/store';
// import usersReducer from "./usersSlice";
 
//console.log("Redux Thunk Middleware:", thunk); // Add this for debugging
 
const ReduxThunkStore = configureStore({
  reducer: {
    users: reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
 
export type RootState = ReturnType<typeof ReduxThunkStore.getState>;
export type AppDispatch = typeof ReduxThunkStore.dispatch;
 
export default ReduxThunkStore;


