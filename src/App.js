import React from "react";
import "./style/index.css"
import { Header } from "./component/Header";
import { Meme } from "./component/Meme";
import { Provider } from "react-redux";
import { store } from "./state/store";

export function App(){
    return(
        <Provider store={store}>
        <div className="w-[1000px] h-auto m-auto shadow-xl">       
            <Header />
            <Meme />
        </div>
        </Provider>
    )
}