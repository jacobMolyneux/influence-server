const { concatSeries } = require("async");
const User = require("../models/influencerModel");
exports.SignUp = function (req, res, next) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.json("New User Created!");
    res.redirect("/");
  });
};
