const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotnev = require("dotenv");
dotnev.config();
const emailRoute = require("./routes").email;
const authRoute = require("./routes").auth;
const courseRoute = require("./routes").course;
const passport = require("passport");
require("./config/passport")(passport);
const cors = require("cors");

//連接mongooseDB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to Mongo Altas");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", authRoute);
app.use(
  "/api/courses",
  passport.authenticate("jwt", { session: false }),
  courseRoute
);
app.use("/api/email", emailRoute);

app.listen(8080, () => {
  console.log("Server running on part 8080.");
});
