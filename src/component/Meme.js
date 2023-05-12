import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import "../style/index.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchMeme, memeState } from "../state/memeState"

export function Meme(){
    const Meme = useSelector(state => state.meme)

    const dispatch = useDispatch()

    // const [meme, setMeme] = useState({
    //     memeImg: "",
    //     topText : "",
    //     bottomText : ""
    // })

    // const [allMemes, setAllMemes] = useState()
    // const [error, setError] = useState(null);

    // useEffect(()=>{
    //     axios.get("https://api.imgflip.com/get_memes").then(res => {
    //         setAllMemes(res.data.data.memes)
    //     }).catch(err => setError(err))
    // },[])

    // if (error) return `Error: ${error.message}`;

    useEffect(()=>{
        dispatch(fetchMeme())
    },[])

    

    function handleClick(){
        let randomMeme = Meme.allMeme[0].data.memes[Math.floor(Math.random() * Meme.allMeme[0].data.memes.length)]
        // setMeme((prev) =>{
        //     return{
        //         ...prev,
        //         memeImg : randomMeme.url,
        //         topText : "",
        //         bottomText : ""         
        //     }
        // })
           dispatch(memeState.actions.setImg(randomMeme.url))
           dispatch(memeState.actions.resetText())
    }
    


    function handleChange(event){
        const {name, value} = event.target
        // setMeme((prev)=>{
        //     return{
        //         ...prev,
        //         [name] : value
        //     }
        // })
        if(name === "topText"){
            dispatch(memeState.actions.setTopText(value))
        }else{
            dispatch(memeState.actions.setBottomText(value))
        }
    }

    console.log(Meme)
    return(
        <div>           
            <div className=" w-[80%]  m-auto flex flex-col gap-6 pt-16">
                <div className="flex justify-center gap-12 ">
                    <input value={Meme.topText} name="topText" onChange={handleChange} className="text-xl font-sans pl-2 font-bold border-gray-300 border-2 rounded-lg h-14 w-96"
                    placeholder="Top text"/>
                    <input value={Meme.bottomText} name="bottomText" onChange={handleChange} className="text-xl font-sans pl-2 font-bold border-gray-300 border-2 rounded-lg h-14 w-96"
                    placeholder="Bottom text"/>
                </div>
                <button onClick={handleClick} className="w-[100%] text-xl text-white p-4 rounded-lg bg-gradient-to-r from-violet-900 to-purple-500">
                    Get a new Meme image! 🖼
                    </button>
            </div>   
            <div className="flex justify-center pt-8 relative">
                <h1 className="input absolute top-16 text-white text-5xl">{Meme.topText}</h1>
                <h1 className="input absolute bottom-16 text-5xl text-white">{Meme.bottomText}</h1>
                <img className="max-w-[700px] h-[525px] mb-7" src={Meme.memeImg}/>    
            </div>  
        </div>
    )
}