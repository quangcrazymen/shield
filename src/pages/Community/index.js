import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import logo from "../../images/smallLogo.png"
function Community() {
    const [thread, setThread] = useState([])
    const threadDataRef = collection(db, "Community")

    useEffect(() => {
        const getThread = async () => {
            const data = await getDocs(threadDataRef)
            setThread(data.docs.map(data => data.data()))
        }
        getThread()
    }, [])
    return (
        <div className="Community">
            <img src={logo} alt="shield-logo" />
            {thread.map(ele => {
                return (
                    <div className="threads">
                        <h2>{ele.Name}</h2>
                        <p>{ele.content}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Community;