const mongose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [6, "Username should be of minimum 6 character"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = bcrypt.hash(this.password, salt);
  next();
});
const User = mongose.model("user", userSchema);
module.exports = User;
