var express = require("express");
const appController = require("../controllers/appController");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//get homepage
router.get("/", appController.homepage);

//get login page
router.get("/LogIn", appController.SignUp);

//get sign up page
router.get("/SignUp", appController.SignUp);

module.exports = router;
