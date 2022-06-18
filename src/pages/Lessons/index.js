import "./style.css"
import { collection, getDocs } from "firebase/firestore/lite"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { db } from "../../firebase-config"
import VideoCard from "../../components/VideoCard"

function Lessons() {
    const [lessons, setLessons] = useState([])
    const lessonsCollectionRef = collection(db, "Courses/Age 3 to 6/Lessons")
    useEffect(() => {
        async function getLessons() {
            const data = await getDocs(lessonsCollectionRef)
            setLessons(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getLessons()
    }, [])
    return (
        <div className="Lessons">
            <div className="lessons--header">
                <div className='register--backBtn'>
                    <Link to="/home/courses">
                        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 18L1 9.5L9.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>
                <h2>Bài học</h2>
            </div >
            <div className="lessons--contents">
                <button className="longBtn">
                    3-6 Tuổi
                </button>
                <div className="recently--videos">
                    {
                        lessons.map(lesson => <VideoCard content={{ ...lesson }} key={lesson.Index} />)
                    }
                </div>

            </div>
        </div>
    );
}

export default Lessons
