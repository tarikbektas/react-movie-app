import { configureStore } from "@reduxjs/toolkit";
import { movieReducers } from "./slice/Movie";

export const store = configureStore({
    reducer:{
        movie:movieReducers
    }
})