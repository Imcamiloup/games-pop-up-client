import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice.js";
import authReducer from "./authSlice.js";

const store = configureStore({
    reducer: {
        event: eventsReducer,
        auth: authReducer,
    },
});

export default store;