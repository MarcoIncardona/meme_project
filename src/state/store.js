import { memeState } from "./memeState";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer: {
        meme: memeState.reducer,
    }, 
})