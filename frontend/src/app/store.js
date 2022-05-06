import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";


// PASSKAN REDUCER INTO STORE
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
