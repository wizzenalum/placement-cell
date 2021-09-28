const passport = require("../configs/passport");
const { Employee } = require("../models");

// this is action to show the sign up page.
module.exports.signup = function (req, res) {
  return res.render("authentication/signup", {title:"signup"});
};
// handle user creation
module.exports.createUser = function (req, res) {
  console.log(req.body);
  Employee.create({...req.body})
  .then(employee=>{console.log(employee)})
  .catch(err=>{console.log(err,"createuser")})
  return res.redirect("/employee/signin");
};

module.exports.signin = function (req, res) {
  return res.render("authentication/signin", {title:"signin"});
};

module.exports.createSession = function (req, res) {
  passport.authenticate();
  return res.redirect("/");
};

module.exports.signout = function (req, res) {
  req.logout();
  return res.redirect("/");
};
