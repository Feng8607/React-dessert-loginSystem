import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const PostCourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState(0);
  let [message, setMessage] = useState("");
  const history = useNavigate();
  const handleTakeToLogin = () => {
    history("/login");
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const postCourse = () => {
    CourseService.post(title, description, price)
      .then(() => {
        window.alert("新的課程已新增");
        history("/course");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div className="postCourse">
      {!currentUser && (
        <div className="logoutPage">
          <p>你必須先登入才能再次上載課程</p>
          <button onClick={handleTakeToLogin}>登入畫面</button>
        </div>
      )}
      {currentUser && currentUser.user.role !== "instructor" && (
        <div>
          <p>只有導師才能上載課程</p>
        </div>
      )}

      {currentUser && currentUser.user.role == "instructor" && (
        <div className="form-group">
          {message && (
            <div
              style={{ color: "red" }}
              className="alert alert-warning"
              role={alert}
            >
              {message}
            </div>
          )}
          <div>
            <label htmlFor="exampleforTitle">課程標題：</label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="exampleforTitle"
              onChange={handleChangeTitle}
              placeholder="請輸入標題"
            />
          </div>

          <br></br>
          <div>
            <label htmlFor="exampleforContent">課程內容：</label>
            <textarea
              name="content"
              aria-describedby="emailHelp"
              className="form-control"
              id="exampleforContent"
              onChange={handleChangeDescription}
              placeholder="請輸入教學內容"
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="exampleforPrice">價錢：</label>
            <input
              name="price"
              type="number"
              className="form-control"
              id="exampleforPrice"
              onChange={handleChangePrice}
              placeholder="請輸入課程價錢"
            />
          </div>
          <br></br>
          <div>
            <button className="btn btn-primary" onClick={postCourse}>
              提交
            </button>
          </div>

          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default PostCourseComponent;
