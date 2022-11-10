const router = require("express").Router();
const Email = require("../models/email-model");
const emailValidation = require("../validation").emailValidation;
router.use((req, res, next) => {
  console.log("A request is coming in to auth.js");
  next();
});
//新增email
router.post("/", async (req, res) => {
  const { error } = emailValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //確認有無重複
  const emailExist = await Email.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("此Email已被註冊");

  let { email } = req.body;
  let newEmail = new Email({
    email,
  });
  try {
    await newEmail.save();
    res.status(200).send(email);
  } catch (err) {
    res.status(400).send("Email不可以使用");
  }
});

module.exports = router;
