import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    AuthService.login(email, password)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        window.alert("登錄成功，現在重定導向個人資料頁面。");
        setCurrentUser(AuthService.getCurrentUser());
        history("/profile");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div className="loginPage">
      <div>
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username">Email：</label>
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            name="email"
            placeholder="請輸入電子郵件"
            autoComplete="off"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password：</label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            name="password"
            placeholder="請輸入密碼"
            autoComplete="off"
          />
        </div>
        <br />
        <div className="formBtn">
          <button onClick={handleLogin}>登入</button>
          {!currentUser && (
            <button>
              <Link className="registerButton" to="/register">
                註冊
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
