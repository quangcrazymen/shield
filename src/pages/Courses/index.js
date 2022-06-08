import {Router,Route,Link} from "react-router-dom"
import CourseInfo from "../../components/CourseInfo";
import courseThumbnail from "../../images/courseThumbnail.png"
import "./style.css"
function Courses() {
    return (
        <div>
            <h2>Các khóa học</h2>
            <CourseInfo courseThumbnail={courseThumbnail}/>
        </div>
    );
}

export default Courses;