import React from "react";

const Commodity = () => {
  return (
    <div className="CommodityPage">
      <img src={require("../picture/BG2.jpg")} className="fixedImg" />
      <section className="backgroundImg">
        <div className="filter"></div>
        <h3>
          各式甜點和甜點教學
          <br />
          多樣的服務滿足顧客需求
        </h3>
      </section>
      <section className="pageContainer">
        <h3>網站服務</h3>
        <div className="circles">
          <div className="circle">
            <img src={require("../picture/1.jpg")} />
            <p>點心課程</p>
          </div>
          <div className="circle">
            <img src={require("../picture/4.jpg")} />
            <p>線上訂購</p>
          </div>
          <div className="circle">
            <img src={require("../picture/5.jpg")} />
            <p>點心總覽</p>
          </div>
          <div className="circle">
            <img src={require("../picture/7.jpg")} />
            <p>精選推薦</p>
          </div>
        </div>
      </section>
      <section className="emptyContainer">
        <h3>
          現在立即加入我們
          <br />
          讓我們一起探索點心的世界
        </h3>
      </section>
      <section className="thirdContainer">
        <div className="cardContainer">
          <h3>點心推薦</h3>
          <h4>故事的味道</h4>
          <div className="cards">
            <div className="card">
              <img src={require("../picture/4.jpg")} />
              <p>精緻美味的餅乾</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                provident quod officia ratione sapiente maxime, ipsa amet
                aliquid minima rem sunt quidem veritatis quam aut? Provident ad
                sequi tempore enim!
              </p>
              <p className="button">Read More</p>
            </div>
            <div className="card">
              <img src={require("../picture/1.jpg")} />
              <p>讚不絕口的甜點</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                provident quod officia ratione sapiente maxime, ipsa amet
                aliquid minima rem sunt quidem veritatis quam aut? Provident ad
                sequi tempore enim!
              </p>
              <p className="button">Read More</p>
            </div>
            <div className="card">
              <img src={require("../picture/2.jpg")} />
              <div className="content">
                <p>精緻美味的餅乾</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet provident quod officia ratione sapiente maxime, ipsa
                  amet aliquid minima rem sunt quidem veritatis quam aut?
                  Provident ad sequi tempore enim!
                </p>
                <p className="button">Read More</p>
              </div>
            </div>
            <div className="card">
              <img src={require("../picture/5.jpg")} />
              <p>讚不絕口的甜點</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                provident quod officia ratione sapiente maxime, ipsa amet
                aliquid minima rem sunt quidem veritatis quam aut? Provident ad
                sequi tempore enim!
              </p>
              <p className="button">Read More</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commodity;
