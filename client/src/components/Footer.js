import React, { Component, useState } from "react";
import facebook from "../Icon/facebook.svg";
import youtube from "../Icon/youtube.svg";
import instagram from "../Icon/instagram.svg";
import twitter from "../Icon/twitter.svg";
import EmailService from "../services/email.service";
const Footer = () => {
  let [email, setEmail] = useState("");
  //放入錯誤訊息
  let [message, setMessage] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const postEmail = () => {
    EmailService.email(email)
      .then(() => {
        window.alert("訂閱成功");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div className="footerPage">
      <div className="footercon">
        <div>
          <div className="footitem">
            <h2>關於我們</h2>
            <nav>
              <ul>
                <li>
                  <a href="">買個點心</a>
                </li>
                <li>
                  <a href="">購物車</a>
                </li>
                <li>
                  <a href="">訂單確認</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footDescription">
            <h2>訂閱我們</h2>
            <nav>
              <ul>
                <li>
                  <div>{message}</div>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="請輸入e-mail"
                    onChange={handleChangeEmail}
                  ></input>
                </li>
                <li>
                  <button onClick={postEmail}>訂閱</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="footerIcon">
        <nav>
          <ul>
            <li>
              <a href="">
                <img src={facebook} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitter} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={youtube} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={instagram} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright">ShengFeng 2022©</div>
    </div>
  );
};

export default Footer;
