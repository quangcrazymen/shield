import {Router,Route,Link} from "react-router-dom"
import CourseInfo from "../../components/CourseInfo";
import courseThumbnail from "../../images/courseThumbnail.png"
import "./style.css"
function Courses() {
    return (
        <div>
            <h2>Các khóa học</h2>
            <CourseInfo courseThumbnail={courseThumbnail}/>
            <Link to="lessons"><button className="viewCourse--btn">XEM BÀI HỌC</button></Link>
            <button className="longBtn">MUA KHÓA HỌC</button>
        </div>
    );
}

export default Courses;