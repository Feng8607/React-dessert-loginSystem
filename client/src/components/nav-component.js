import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("登出成功，現在即將回到登入頁面");
    setCurrentUser(null);
    history("/");
  };
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };
  return (
    <div className="nav_header">
      <nav className="header">
        <Link className="brand" to="/">
          <i className="bx bx-cake" />
          手做點心
        </Link>
        <div className="headerContainer">
          <ul className={active}>
            <li className="nav_item">
              <Link className="nav_link" to="/">
                首頁
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/Commodity">
                商品資訊
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/about">
                關於我們
              </Link>
            </li>
            {!currentUser && (
              <li>
                <Link className="nav_link" to="/login">
                  會員登入
                </Link>
              </li>
            )}
            {currentUser && (
              <li>
                <Link className="nav_link" to="/profile">
                  個人檔案
                </Link>
              </li>
            )}
            {currentUser && (
              <li>
                <Link className="nav_link" to="/course">
                  教學課程
                </Link>
              </li>
            )}
            {currentUser && currentUser.user.role == "instructor" && (
              <li>
                <Link className="nav_link" to="/postCourse">
                  新增課程
                </Link>
              </li>
            )}
            {currentUser && currentUser.user.role == "student" && (
              <li>
                <Link className="nav_link" to="/enroll">
                  課程註冊
                </Link>
              </li>
            )}
            {currentUser && (
              <li>
                <Link onClick={handleLogout} className="nav_link" to="#">
                  登出
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      {/*
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              首頁
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    首頁
                  </Link>
                </li>
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      註冊
                    </Link>
                  </li>
                )}
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      登入
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link onClick={handleLogout} className="nav-link" to="#">
                      登出
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      個人檔案
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/course">
                      Course
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role == "instructor" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/postCourse">
                      Post Course
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role == "student" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/enroll">
                      Enroll
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>*/}
    </div>
  );
};

export default NavComponent;
