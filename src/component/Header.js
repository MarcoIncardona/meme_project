import React from "react"

export function Header(){
    return(
        <div className="flex justify-between p-5 items-center bg-gradient-to-r from-violet-900 to-purple-500">
            <div className="flex items-center gap-3">
                <img src={require("../img/troll-face.png")} className=" w-28 " />
                <h1 className=" text-3xl text-white">Meme Generator</h1>
            </div>
            <div>
                <h4 className="text-white">
                    React project
                </h4>
            </div>
        </div>
    )
}