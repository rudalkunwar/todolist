const User = require("../models/user");
const errorHandler = (err) => {
  const errors = { username: "", email: "", password: "" };
  if (err.message.includes("Incorrect Password")) {
    errors["password"] = "Incorrect Password";
  }

  if (err.message.includes("User does not exist")) {
    errors["email"] = "User does not exist";
  }

  if (err.code === 11000) {
    const duplicateKey = Object.keys(err.keyPattern)[0];

    if (duplicateKey === "username") {
      errors["username"] = "User already exists";
    }

    if (duplicateKey === "email") {
      errors["email"] = "Email already registered";
    }
  }
  return errors;
};
const user_register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ user: user.username });
  } catch (err) {
    const errors = errorHandler(err);
    res.json(errors);
  }
};
const user_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email,password);
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
