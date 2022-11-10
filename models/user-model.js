const mongoose = require("mongoose");
//將使用者加密
const bcrypt = require("bcrypt");
//建立使用者資料庫
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 6,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  role: {
    type: String,
    enum: ["student", "instructor"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//檢查是否為學生
userSchema.methods.isStudent = function () {
  //是學生的話return
  return this.role == "student";
};
//檢查是否為講師
userSchema.methods.isinstructor = function () {
  //是講師的話return
  return this.role == "instructor";
};
userSchema.methods.isAdmin = function () {
  //是admin的話return
  return this.role == "admin";
};
//pre的意思是儲存前，檢查函式，要求他做甚麼事情，schema的middleware
userSchema.pre("save", async function (next) {
  //檢查是否是這個密碼或是這是不是新的
  if (this.isModified("password") || this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err, isMatch);
    }
    cb(null, isMatch);
  });
};
module.exports = mongoose.model("User", userSchema);
