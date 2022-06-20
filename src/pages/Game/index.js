import gameLogo from "../../images/gameLogo.png"
import {db} from "../../firebase-config"
import { collection,getDocs } from "firebase/firestore/lite";
import { useState,useEffect } from "react";

function Game() {
    const [questAndAns,setQuestAndAns] = useState({})
    const gameRef = collection(db,"/Courses/Age 3 to 6/Lessons/mJtefhCOK2SrxdgpHG4D/Exercises")
    const [count,setCount] = useState(true)
    useEffect(()=>{
        async function settingUpGame(){
            const data = await getDocs(gameRef)
            data.docs.map(doc=>setQuestAndAns({...doc.data()}))
            console.log("this ran")
        }
        settingUpGame()
    },[count])
    function increaseCount(){
        setCount(prev=>!prev)
        console.log(questAndAns)
    }
    function test(){
        
        return [<h1>Hello world</h1>,<h2>Chào</h2>]
    }
    return (
        <div className="Game">
            <img onClick={increaseCount} src={gameLogo} alt="game logo"/>
            <h2>{questAndAns["Question"]}</h2>
            {test()}
        </div>
    );
}

export default Game;