var express = require("express");
const appController = require("../controllers/appController");
const authController = require("../controllers/authController");
var router = express.Router();

/* GET home page. */

//get homepage
router.get("/", appController.homepage);

// create user
router.post("/SignUp", authController.SignUp);

module.exports = router;
