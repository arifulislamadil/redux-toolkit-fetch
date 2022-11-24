import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./reduxSlice";


export const store = configureStore({
    reducer:{
        user: userSlice
    }
})