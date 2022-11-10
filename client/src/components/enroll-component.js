import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const Enrollcomponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useNavigate();
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  const handleTakeToLogin = () => {
    history("/login");
  };
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    CourseService.getCouseByName(searchInput)
      .then((data) => {
        console.log(data);
        setSearchResult(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEnroll = (e) => {
    CourseService.enroll(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Done Enrollment");
        history("/course");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="enrollPage" style={{ padding: "1rem" }}>
      {!currentUser && (
        <div className="logoutPage">
          <p>查詢課程前，請先登入</p>
          <button onClick={handleTakeToLogin}>轉至登入頁面</button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <p>Only students can enroll in course.</p>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="studentEnroll">
          <h2 className="enrollTitle">課程查詢</h2>
          <input
            type="text"
            className="form-control"
            onChange={handleChangeInput}
            placeholder="請輸入課程"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            搜尋
          </button>
        </div>
      )}
      {searchResult && searchResult.length != 0 && (
        <div className="cardContainer">
          {searchResult.map((course) => (
            <div key={course._id} className="card">
              <div className="cardBody">
                <h5>{course.title}</h5>
                <p>課程價格:{course.description}</p>
                <p>價格:{course.price}</p>
                <p>導師名稱:{course.instructor.username}</p>
                <div>
                  <a href="#" onClick={handleEnroll} id={course._id}>
                    註冊課程
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Enrollcomponent;
