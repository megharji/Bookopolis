import { configureStore } from "@reduxjs/toolkit";
import RegisterReducer from "./reducers/RegisterReducer";

export const store = configureStore({
    reducer: {
        RegisterReducer: RegisterReducer
    },
});