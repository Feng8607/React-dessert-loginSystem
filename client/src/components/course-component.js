import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";
const CourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useNavigate();
  const handleTakeToLogin = () => {
    history("/login");
  };
  let [courseData, setCourseData] = useState(null);
  useEffect(() => {
    console.log("Using effect.");
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }
    if (currentUser.user.role == "instructor") {
      CourseService.get(_id)
        .then((data) => {
          setCourseData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (currentUser.user.role == "student") {
      CourseService.getEnrolledCourse(_id)
        .then((data) => {
          console.log(data);
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="coursePage" style={{ padding: "1rem" }}>
      {!currentUser && (
        <div className="logoutPage">
          <p>你必須先登入才能再次上載課程</p>
          <button onClick={handleTakeToLogin}>登入畫面</button>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div>
          <h1>歡迎來到訪客的課程頁面</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <h1>歡迎來到講師的課程頁面</h1>
        </div>
      )}
      {currentUser && courseData && courseData.length != 0 && (
        <div className="courseContainer">
          <div className="cards">
            {courseData.map((course) => (
              <div key={course._id} className="card">
                <div className="cardBody">
                  <h5 className="cardTitle">{course.title}</h5>
                  <p className="cardText">
                    導師 : {course.instructor.username}
                  </p>
                  <p className="cardText">課程介紹:{course.description}</p>
                  <p className="cardText">
                    學生人數 : {course.student.length}位
                  </p>
                  <div>
                    <button type="submit">價錢:{course.price}</button>
                  </div>
                  <br />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
