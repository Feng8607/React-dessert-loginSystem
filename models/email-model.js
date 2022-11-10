const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
});
const Email = mongoose.model("Email", emailSchema);
module.exports = Email;
