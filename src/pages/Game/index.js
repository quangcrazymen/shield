import gameLogo from "../../images/gameLogo.png"
import { db } from "../../firebase-config"
import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "./style.css"

function Game() {
    const [questAndAns, setQuestAndAns] = useState({})
    const gameRef = collection(db, "/Courses/Age 3 to 6/Lessons/mJtefhCOK2SrxdgpHG4D/Exercises")
    const [count, setCount] = useState(true)
    const [correctness,setCorrectness] = useState(null)
    const [result,SetResult] = useState(null)
    useEffect(() => {
        async function settingUpGame() {
            const data = await getDocs(gameRef)
            data.docs.map(doc => setQuestAndAns({ ...doc.data() }))
            console.log("this ran")
        }
        settingUpGame()
    }, [count])
    function increaseCount() {
        setCount(prev => !prev)
        console.log(questAndAns)
    }

    function checkForAnswer(answer){
        answer===questAndAns["Answer"] ? setCorrectness(true):setCorrectness(false)
    }

    function Option() {
        return (
            <div className="Option">
                <div className="info-card" onClick={()=>checkForAnswer("Option1")}>{questAndAns["Option1"]}</div>
                <div className="info-card" onClick={()=>checkForAnswer("Option2")}>{questAndAns["Option2"]}</div>
                <div className="info-card" onClick={()=>checkForAnswer("Option3")}>{questAndAns["Option3"]}</div>
            </div>
        )
    }
    console.log(correctness)
    return (
        <div className="Game">
            <Link className='register--backBtn' to="/home">
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 18L1 9.5L9.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Link>
            <img className="game--heroImage" onClick={increaseCount} src={gameLogo} alt="game logo" />
            <h2 className="game--question">{questAndAns["Question"]}</h2>
            {correctness===false && <p>Sai rồi</p>}
            <Option/>
            <button className="longBtn">NỘP ĐÁP ÁN</button>
        </div>
    );
}

export default Game;