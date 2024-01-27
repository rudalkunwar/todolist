const jwt = require("jsonwebtoken");
const requireAuth = (req, res, next) => {
  const token = req.cookie.auth;
  if (token) {
    jwt.verify(token, "mySecretKeyXoXo", (err, encodedToken) => {
      if (err) {
        res.redirect("/login");
      } else {
        next();
      }
    });
    res.redirect("/login");
  }
};
module.exports = {requireAuth};