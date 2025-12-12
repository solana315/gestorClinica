const express = require("express");
const router = express.Router();
const authController = require("../controllers/controller.login");
const registerController = require('../controllers/register.controller');

router.post("/login", authController.login);
router.post('/register', registerController.register);


module.exports = router;
