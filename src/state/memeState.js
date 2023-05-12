import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    memeImg: "",
    topText: "",
    bottomText: "",
    allMeme: []
}

export const memeState = createSlice({
    name: "Meme",
    initialState,
    reducers:{
        setImg: (state, action) => {state.memeImg = action.payload},
        setAllMeme: (state, action) => {state.allMeme = [...state.allMeme, action.payload]},
        setTopText: (state, action) => {state.topText = action.payload},
        setBottomText: (state, action) => {state.bottomText = action.payload},
        resetText: (state, action) => {state.topText = "", state.bottomText = ""}
    }
})

export function fetchMeme(){
    return async function(dispatch){
        try{
            const response = await axios.get("https://api.imgflip.com/get_memes");
            dispatch(memeState.actions.setAllMeme(response.data))
        }catch (err) {
            throw new Error(err);
          }
    }
}
