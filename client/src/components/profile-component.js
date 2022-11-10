import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useNavigate();
  const handleTakeToLogin = () => {
    history("/login");
  };
  return (
    <div className="profilePage">
      {!currentUser && (
        <div className="logoutPage">
          <p>你必須先登入才能再次上載課程</p>
          <button onClick={handleTakeToLogin}>登入畫面</button>
        </div>
      )}
      {currentUser && (
        <div className="profileContainer">
          <h1>個人資料頁面</h1>
          <h3>姓名: {currentUser.user.username}</h3>
          <p>職稱: {currentUser.user.role}</p>
          <p>email: {currentUser.user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
