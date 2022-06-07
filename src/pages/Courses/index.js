import courseThumbnail from "../../images/courseThumbnail.png"
import "./style.css"
function Courses() {
    return (
        <div>
            <h2>Các khóa học</h2>
            <div className="course--thumbnail">
                <img src={courseThumbnail} alt="course thumbnail"/>
            </div>
        </div>
    );
}

export default Courses;