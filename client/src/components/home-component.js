import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="HomePage">
      <section className="pic">
        <div className="filter"></div>
        <div className="BackGroundContent">
          <h3>
            手做點心，甜點鹹派
            <br /> 探索屬於你的點心世界
          </h3>
          <button className="start">現在開始</button>
        </div>
      </section>
      <section className="section2">
        <div className="filter">
          <div className="titleBox">
            <h2 className="title">商品種類</h2>
          </div>
          <div className="means1">
            <div className="mean2">
              <img src={require("../picture/1.jpg")}></img>
            </div>
            <div className="mean3">
              <p>頂級食材、手工精緻，讓你輕鬆送禮，表達心意最好的伴手禮</p>
            </div>
          </div>
          <div className="means2">
            <div className="mean4">
              <img src={require("../picture/3.jpg")}></img>
            </div>
            <div className="mean5">
              <p>品質精緻，風味獨特，廣受大眾喜愛</p>
            </div>
          </div>
          <div className="means1">
            <div className="mean2">
              <img src={require("../picture/5.jpg")}></img>
            </div>
            <div className="mean3">
              <p>新鮮衛生，真材實料，新鮮美味看的見，適合家庭、情侶一起體驗</p>
            </div>
          </div>
          <div className="means2">
            <div className="mean4">
              <img src={require("../picture/7.jpg")}></img>
            </div>
            <div className="mean5">
              <p>各式甜點、糕餅，為你傳遞幸福滋味</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="filter"></div>
        <div className="BackGroundContent">
          <h2>手做課程</h2>
          <h3>
            跟著一起動手做出屬於自己的專屬甜點
            <br />
            現在開始加入我們，找尋自己喜歡的課程
            <br />
            也可以申請成為導師，提供你的甜點食譜
          </h3>
          <button className="start">
            <Link to="/login">會員加入</Link>
          </button>
        </div>
      </section>
      <section className="section4">
        <div className="cardContainer">
          <h2>商品資訊</h2>
          <div className="cards">
            <div className="card">
              <div className="imgContainer">
                <img src={require("../picture/4.jpg")} />
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet provident quod officia ratione sapiente maxime, ipsa
                  amet aliquid minima rem sunt quidem veritatis quam aut?
                  Provident ad sequi tempore enim!
                </p>
              </div>
            </div>
            <div className="card">
              <div className="imgContainer">
                <img src={require("../picture/2.jpg")} />
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet provident quod officia ratione sapiente maxime, ipsa
                  amet aliquid minima rem sunt quidem veritatis quam aut?
                  Provident ad sequi tempore enim!
                </p>
              </div>
            </div>
            <div className="card">
              <div className="imgContainer">
                <img src={require("../picture/7.jpg")} />
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet provident quod officia ratione sapiente maxime, ipsa
                  amet aliquid minima rem sunt quidem veritatis quam aut?
                  Provident ad sequi tempore enim!
                </p>
              </div>
            </div>
            <div className="card">
              <div className="imgContainer">
                <img src={require("../picture/6.jpg")} />
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet provident quod officia ratione sapiente maxime, ipsa
                  amet aliquid minima rem sunt quidem veritatis quam aut?
                  Provident ad sequi tempore enim!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
