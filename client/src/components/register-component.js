import React, { useState } from "react";
//舊版是useHistory新版改useNavigate
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const RegisterComponent = () => {
  const history = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  //放入錯誤訊息
  let [message, setMessage] = useState("");
  //event
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        //成功註冊後會顯示註冊成功，即將前往登入頁面
        window.alert(
          "Register succeeds. You are redirected to the login page."
        );
        //成功註冊後轉到登入頁面
        history("/login");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div style={{ padding: "1rem" }} className="register">
      <div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div>
          <label htmlFor="username">Username：</label>
          <input
            onChange={handleChangeUsername}
            type="text"
            className="form-control"
            name="username"
            placeholder="請輸入使用者名稱"
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">email：</label>
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            name="email"
            placeholder="請輸入email"
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password：</label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            name="password"
            placeholder="請輸入密碼"
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">role：</label>
          <input
            onChange={handleChangeRole}
            type="text"
            className="form-control"
            name="role"
            placeholder="請輸入職位"
          />
        </div>
        <br />
        <div>
          <button onClick={handleRegister} className="btn btn-primary">
            註冊
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
