import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../modules/Auth/slice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});