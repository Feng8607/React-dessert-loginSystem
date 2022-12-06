# React-dessert-loginSystem
Create-React-App建立開發環境，後端使用node.js連接mongoDB資料庫，製作登入、註冊、訂閱系統
# 學習歷程
這個作品主要是學習前端如何去串接後端資料庫，因為想實際操作crud，所以後端使用node.js連接mongoose資料庫，來完成註冊、登入、訂閱電子報
，在這製作的過程中也認識後端一些相關知識
- 後端則是使用joi，dotenv、cors、bcrypt、jsonwebtoken、passport跟passport-jwt跟passport-local，並連接後端mongoose雲端資料庫
1. 利用dotenv，把想要隱藏的後端變數資料，放入.env檔案
2. 使用bcrypt，是希望在model中所設定的使用者資料，經過加密在儲存進去mongoose
3. 使用joi，客製化驗證post數據，來告訴使用者錯誤資訊
4. 使用passport驗證jsonwebtoken
5. 使用cors，可以讓兩個server同時運行，一邊運行前端，一邊運行後端

- 前端的部分則是使用axios串接後端的api

# LIVE DEMO
網站:https://react-loginsystem.herokuapp.com/ (heroku 11/28不提供免費上架，正在另外研究其他網站上架)

![image](https://github.com/Feng8607/React-dessert-loginSystem/blob/master/login%20demo.png)
![image](https://github.com/Feng8607/React-dessert-loginSystem/blob/master/registion%20demo.png)
![image](https://github.com/Feng8607/React-dessert-loginSystem/blob/master/profile%20demo.png)
# 使用技能
- React
- React Router
- SCSS
- async & await、 axios API
- MongoDB
- npm 各式套件
