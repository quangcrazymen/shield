function CourseInfo(props) {
    return (
        <div>
            <div className="course--thumbnail">
                <img src={props.courseThumbnail} alt="course thumbnail"/>
            </div>
            <h3>Độ tuổi 3-6</h3>
            <h2>100.000VND</h2>
            <p>Mô tả</p>
            <p>Khóa học cung cấp kĩ năng cần thiết cho bé</p>
        </div>
    );
}

export default CourseInfo;