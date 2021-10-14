var express = require("express");
const appController = require("../controllers/appController");
const authController = require("../controllers/authController");
const cors = require("cors");
var router = express.Router();

/* GET home page. */

//get homepage
router.get("/", appController.homepage);

// get log in page
router.get("/LogIn", appController.get_logIn_Page);

// log in to app
router.post("/LogIn", authController.SignIn);

// get sign in page
router.get("/SignUp", cors(), appController.get_sign_up_page);

// create user
router.post("/SignUp", cors(), authController.SignUp);

module.exports = router;
