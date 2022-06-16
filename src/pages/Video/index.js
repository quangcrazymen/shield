import { collection, getDocs } from "firebase/firestore/lite"
import { useState, useEffect } from "react"
import { db } from "../../firebase-config"
import VideoCard from "../../components/VideoCard"

import "./style.css"

function Video() {
    //https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router
    const [lessons, setLessons] = useState([])
    const lessonsCollectionRef = collection(db, "Courses/Age 3 to 6/Lessons")
    const [currentLesson, setCurrentLesson] = useState(lessons[0])

    useEffect(() => {
        async function getLessons() {
            const data = await getDocs(lessonsCollectionRef)
            setLessons(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getLessons()
    }, [])

    console.log(currentLesson)
    return (
        <div className="Video">
            <h1>Video page</h1>

            <div className="iframe-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TxtwlOqeg5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3>Bài 1: Gặp người lạ con nên làm thế nào?</h3>
            <p className="video--description">Bé hãy sử dụng những phương pháp đúng đắn để bảo vệ bản thân khi gặp tình huống tương tự nhé! </p>
            <div className="recently--videos">
                {
                    lessons.map(lesson => <VideoCard content={{ ...lesson }} key={lesson.Index} />)
                }
            </div>
            <button className="longBtn">LUYỆN TẬP</button>
        </div>
    );
}

export default Video;