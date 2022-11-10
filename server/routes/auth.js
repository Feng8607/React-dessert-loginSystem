const router = require("express").Router();
//這是放入Validation裡的joi
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
//每次要進來做認證時都會跑這個，讓我們知道有人要進來auth.js當中
router.use((req, res, next) => {
  console.log("A request is coming in to auth.js");
  next();
});
router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API is working.",
  };
  return res.json(msgObj);
});

router.post("/register", async (req, res) => {
  //check the validation of data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if the user exists確認email有沒有被註冊
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("此Email已被註冊");

  const newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send({
      msg: "success",
      saveObject: savedUser,
    });
  } catch (err) {
    res.status(400).send("User not saved.");
  }
});
//檢查帳號密碼是否輸入正確
router.post("/login", (req, res) => {
  //check the Validation of data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      res.status(400).send(err);
    }
    if (!user) {
      res.status(401).send("無此使用者");
    } else {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) return res.status(400).send(err);
        if (isMatch) {
          const tokenObject = { _id: user._id, email: user.email };
          const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
          res.send({ success: true, token: "JWT " + token, user });
        } else {
          res.status(401).send("密碼錯誤");
        }
      });
    }
  });
});

module.exports = router;
