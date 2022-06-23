import { db } from "../../firebase-config";
import { getDocs, addDoc, collection } from "firebase/firestore/lite";
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

    async function addContent() {
        await addDoc(threadDataRef, {
            Name: "Trần Đại Quang",
            content: content,
            Likes: 99
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
                    <h2>Cộng đồng.</h2>
                </div>
                <img className="community--profile" src={profilePicture} alt="profile pic" />
            </div>
            <div className="community--tempSelectionBar">
                <div className="community--tempParentPage">Thảo luận</div>
                <div className="community--tempExpertPage">Chuyên gia</div>
            </div>
            {thread.map(ele => {
                // const day = (new Date(ele.Time.seconds * 1000)).getDate().toString()
                // const month = (new Date(ele.Time.seconds * 1000)).getMonth().toString()
                // const year = (new Date(ele.Time.seconds * 1000)).getFullYear().toString()

                return (
                    <div className="threads">
                        <div className="threads--card">
                            <img className="thread--profile" src={profilePicture} alt="profile pic" />
                            <div className="thread--text">
                                <h4 className="community--tempName">{ele.Name}</h4>
                                {/* {ele.hasOwnProperty('Time') &&<p>{day}/{month}/{year}</p>} */}
                                <p className="community--tempDate">1/2/2022</p>
                                <p className="community--tempContent">{ele.content}</p>
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.172 1.84907C17.1103 0.787078 15.7027 0.141398 14.2052 0.0294528C12.7077 -0.0824924 11.2198 0.346733 10.012 1.23907C8.73965 0.292709 7.15599 -0.136417 5.57991 0.038109C4.00384 0.212635 2.55243 0.977849 1.51797 2.17966C0.483501 3.38146 -0.0571834 4.93059 0.00479541 6.51509C0.0667742 8.09958 0.726812 9.60174 1.85199 10.7191L9.30199 18.1691C9.39496 18.2628 9.50556 18.3372 9.62742 18.388C9.74928 18.4387 9.87998 18.4649 10.012 18.4649C10.144 18.4649 10.2747 18.4387 10.3966 18.388C10.5184 18.3372 10.629 18.2628 10.722 18.1691L18.172 10.7191C18.7546 10.1368 19.2169 9.44541 19.5322 8.68444C19.8476 7.92346 20.0099 7.1078 20.0099 6.28407C20.0099 5.46034 19.8476 4.64468 19.5322 3.88371C19.2169 3.12273 18.7546 2.43135 18.172 1.84907ZM16.762 9.30907L10.012 16.0491L3.26199 9.30907C2.66717 8.71177 2.26197 7.95212 2.09722 7.12541C1.93248 6.2987 2.01553 5.44176 2.33595 4.66207C2.65637 3.88238 3.19989 3.21466 3.89834 2.74269C4.59679 2.27072 5.41906 2.01551 6.26199 2.00907C7.38811 2.01183 8.46709 2.46141 9.26199 3.25907C9.35496 3.3528 9.46556 3.42719 9.58742 3.47796C9.70928 3.52873 9.83998 3.55487 9.97199 3.55487C10.104 3.55487 10.2347 3.52873 10.3566 3.47796C10.4784 3.42719 10.589 3.3528 10.682 3.25907C11.5003 2.54995 12.5575 2.17822 13.6395 2.2191C14.7216 2.25998 15.7477 2.71042 16.5102 3.47926C17.2727 4.2481 17.7146 5.27791 17.7465 6.36026C17.7784 7.44261 17.3979 8.49666 16.682 9.30907H16.762Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )
            })}
            <input className="community--addContent"
                placeholder="Nhập nội dung"
                onChange={event => {
                    setContent(event.target.value)
                }}
            ></input>
            <div className="tempAddBtn" onClick={addContent} >
                <svg className="lie" width="22" height="5" viewBox="0 0 22 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="21.4092" y="1.0304" width="3.25714" height="20.4702" transform="rotate(90.445 21.4092 1.0304)" fill="white" />
                </svg>
                <svg className="stand" width="3" height="21" viewBox="0 0 3 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="3" height="21" fill="white" />
                </svg>
            </div>


            <FooterNav />
        </div>
    );
}

export default Community;