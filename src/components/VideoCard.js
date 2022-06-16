
import {Link } from "react-router-dom"
function VideoCard(props) {
    let { Title, Description, Thumbnail, Index } = props.content
    // function handleClick(){
    //     window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    // }
    return (
        <div className="video--card">
            <div className="thumbnail">
                <img src={Thumbnail} alt="thumbnail" />
            </div>
            <div className="video--title">
                <h3>Bài {Index}</h3>
                <p>{Title}</p>
            </div>
            <div className="play--button">
                <Link content={props} to="/video">
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.71264 0.633517L23.1002 14.072L0.768342 25.8749L1.71264 0.633517Z" fill="white" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default VideoCard;