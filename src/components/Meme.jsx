// import { useState } from 'react';
// import memesData from "../memesData.js"
// export default function Main() {

//   const [memeImage, setMemeImage] = useState("")
    
//   function getMemeImage() {
//     const memesArray = memesData.data.memes
//     const randomNumber = Math.floor(Math.random() * memesArray.length)
//     setMemeImage(memesArray[randomNumber].url)
   
// }

//   return (
//     <div className="main-container">
//       <div className="input-container">
//         <input type="text" placeholder="Top Text"/>
//         <input type="text" placeholder="Bottom Text"/>
//       </div>
//       <div>
//         <button onClick={getMemeImage}>Get a new meme image  🖼</button>
//       </div>
//         <img src={memeImage} alt="" className="memeimg"/>
//     </div>
//   )
    
  
// }

import memesData from "../memesData.jsx";
import { useState } from 'react';

export default function Meme() {
    const [memeImage, setMemeImage] = useState("../memeimg.png");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    return (
        <main>
             <div className="main-container">  
                <div className="input-container">
                    <input type="text" placeholder="Top Text"/>
                    <input type="text" placeholder="Bottom Text"/>
                </div> 
                <div>
                    <button onClick={getMemeImage}>Get a new meme image  🖼</button>
                </div>    
                <img src={memeImage} alt="" className="memeimg"/>
            </div>     
        </main>
    );
}
