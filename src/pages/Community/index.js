import { db } from "../../firebase-config";
import { getDocs,addDoc, collection } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import logo from "../../images/smallLogo.png"
import FooterNav from "../../components/FooterNav";
import profilePicture from "../../images/profilePicture.png"
import "./style.css"


function Community() {
    const [thread, setThread] = useState([])
    const threadDataRef = collection(db, "Community")
    const [count, setCount] = useState(0)
    const [content, setContent] = useState("")

    async function addContent(){
        await addDoc(threadDataRef,{
            Name:"Trần Đại Quang",
            content:content,
            Likes:99
        })
        console.log("addContent ran")
        setCount(prev => prev + 1)
    }
    useEffect(() => {
        const getThread = async () => {
            const data = await getDocs(threadDataRef)
            setThread(data.docs.map(data => data.data()))
            console.log("this ran")
        }
        getThread()
    }, [count])
    return (
        <div className="Community">
            <div className="community--topNav">
                <img className="community--logo" src={logo} alt="shield-logo" />
                <div className="community--topNavText">
                    <p>Chào bạn!</p>
                    <h1>Cộng đồng.</h1>
                </div>
                <img className="community--profile" src={profilePicture} alt="profile pic" />
            </div>
            {thread.map(ele => {
                // const day = (new Date(ele.Time.seconds * 1000)).getDate().toString()
                // const month = (new Date(ele.Time.seconds * 1000)).getMonth().toString()
                // const year = (new Date(ele.Time.seconds * 1000)).getFullYear().toString()

                return (
                    <div className="threads">
                        <h2>{ele.Name}</h2>
                        {/* {ele.hasOwnProperty('Time') &&<p>{day}/{month}/{year}</p>} */}
                        <p>{ele.content}</p>
                    </div>
                )
            })}
            <input
                placeholder="Nhập nội dung"
                onChange={event=>{
                    setContent(event.target.value)
                }}
            ></input>
            <button onClick={addContent} >Add</button>
            <FooterNav />
        </div>
    );
}

export default Community;