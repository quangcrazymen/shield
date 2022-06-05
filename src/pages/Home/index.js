import sideBarBtn from "../../images/sideBarBtn.png"
import logo from "../../images/smallLogo.png"
import profilePicture from "../../images/profilePicture.png"
import "./style.css"
// Use htmltagwrap Alt+W
function Home() {
    return (
        <div className="homepage">
            <div className="topNav">
                <div className="topNav--left">
                    <img className="sideBarBtn" src={sideBarBtn} alt="sideBarBtn" />
                    <img className="logo--small" src={logo} alt="Small logo" />
                    <h2 className="logo--text">Shield.</h2>
                </div>
                <img className="picture--profile" src={profilePicture} alt="Profile pic" />
            </div>
            <div className="content">
                <h1>Content goes here</h1>
            </div>
        </div>
    );
}

export default Home;