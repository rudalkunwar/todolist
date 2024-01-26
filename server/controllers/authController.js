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

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
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
    console.log(errors);
    res.json(errors);
  }
};
// const user_login =  (req,res) =>{

// }
module.exports = {
  user_register,
};