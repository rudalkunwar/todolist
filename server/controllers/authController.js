const User = require("../models/user");
const jwt = require("jsonwebtoken");
const errorHandler = (err) => {
  const errors = { username: "", email: "", password: "" };
  if (err.message.includes("Incorrect Password")) {
    errors["password"] = "Incorrect Password";
  }

  if (err.message.includes("User doesnot exists")) {
    errors["email"] = "User does not exist";
  }

  if (err.code === 11000) {
    const duplicateKey = Object.keys(err.keyPattern)[0];

    if (duplicateKey === "username") {
      errors["username"] = "Username already exists";
    }

    if (duplicateKey === "email") {
      errors["email"] = "Email already registered";
    }
  }
  return errors;
};
const day = 60 * 60 * 24;
const createToken = (id) => {
  return jwt.sign({ id }, "mySecretKeyXoXo", { expiresIn: day * 3 });
};

const user_register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    const token = createToken(user._id);
    res.cookie("auth", token, {
      maxAge: day * 3 * 1000,
      httpOnly: true,
    });
    res.status(201).json({ user: user.username });
  } catch (err) {
    const errors = errorHandler(err);
    res.json(errors);
  }
};
const user_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("auth", token, {
      maxAge: day * 3 * 1000,
      httpOnly: true,
    });
    console.log(res);
    res.status(201).json({ user: user.username });
  } catch (err) {
    const errors = errorHandler(err);
    res.json(errors);
  }
};
module.exports = {
  user_register,
  user_login,
};
