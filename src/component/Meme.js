import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import "../style/index.css"

export function Meme(){
    const [meme, setMeme] = useState({
        memeImg: "",
        topText : "",
        bottomText : ""
    })

    const [allMemes, setAllMemes] = useState()
    const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get("https://api.imgflip.com/get_memes").then(res => {
            setAllMemes(res.data.data.memes)
        }).catch(err => setError(err))
    },[])

    if (error) return `Error: ${error.message}`;

    function handleClick(){
        let randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)]
        setMeme((prev) =>{
            return{
                ...prev,
                memeImg : randomMeme.url,
                topText : "",
                bottomText : ""         
            }
        })      
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }
    return(
        <div>           
            <div className=" w-[80%]  m-auto flex flex-col gap-6 pt-16">
                <div className="flex justify-center gap-12 ">
                    <input value={meme.topText} name="topText" onChange={handleChange} className="text-xl font-sans pl-2 font-bold border-gray-300 border-2 rounded-lg h-14 w-96"
                    placeholder="Top text"/>
                    <input value={meme.bottomText} name="bottomText" onChange={handleChange} className="text-xl font-sans pl-2 font-bold border-gray-300 border-2 rounded-lg h-14 w-96"
                    placeholder="Bottom text"/>
                </div>
                <button onClick={handleClick} className="w-[100%] text-xl text-white p-4 rounded-lg bg-gradient-to-r from-violet-900 to-purple-500">
                    Get a new Meme image! 🖼
                    </button>
            </div>   
            <div className="flex justify-center pt-8 relative">
                <h1 className="input absolute top-16 text-white text-5xl">{meme.topText}</h1>
                <h1 className="input absolute bottom-16 text-5xl text-white">{meme.bottomText}</h1>
                <img className="max-w-[700px] h-[525px] mb-7" src={meme.memeImg}/>    
            </div>  
        </div>
    )
}