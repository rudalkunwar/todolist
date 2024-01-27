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
  this.password = await bcrypt.hash(this.password, salt);
  console.log(this.password);
  next();
});

userSchema.statics.login = async function (email,password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else {
      throw Error("Incorrect Password");
    }
  } else {
    throw Error("User doesnot exists");
  }
};
const User = mongose.model("user", userSchema);
module.exports = User;
