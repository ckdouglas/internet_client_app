import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'; // Import the authentication slice
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});