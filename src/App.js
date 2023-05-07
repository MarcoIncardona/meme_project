import React from "react";
import "./style/index.css"
import { Header } from "./component/Header";
import { Meme } from "./component/Meme";

export function App(){
    return(
        <div className="w-[1000px] h-auto m-auto shadow-xl">       
            <Header />
            <Meme />
        </div>
    )
}