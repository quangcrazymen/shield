// Use htmltagwrap Alt+W
import InfoCard from "../../components/InfoCard";
import logo from "../../images/logo shield xanh 1.png"
import { Link } from "react-router-dom";
import "firebase/app"
import "./style.css"
function Welcome() {
    return (
        <div className="welcome">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="main-title">Shield xin chào!</h1>
            <h1 className="question">Bạn là?</h1>
            <InfoCard name="Học sinh" />
            <InfoCard name="Phụ huynh" />
            <Link to="/home" ><p>Đã có tài khoản - Mời đăng nhập</p></Link>
        </div>
    );
}

export default Welcome;