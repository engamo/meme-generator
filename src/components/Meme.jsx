import { useState, useEffect } from 'react';

export default function Meme() {
    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "../memeimg.png"
    });

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            randomImage: url
        }))
        
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            [name]: value
        }))
    }

    return (
        <main>
             <div className="main-container">  
                <div className="input-container">
                    <input type="text" placeholder="Top Text" value={memeImage.topText} name="topText" onChange={handleChange}/>
                    <input type="text" placeholder="Bottom Text" value={memeImage.bottomText} name="bottomText" onChange={handleChange}/>
                </div> 
                <div>
                    <button onClick={getMemeImage}>Get a new meme image  🖼</button>
                </div>  
                <div className="meme">
                    <img src={memeImage.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{memeImage.topText}</h2>
                    <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
                </div>  
            </div>     
        </main>
    );
}
