const express = require("express");
const router = express.Router();
const authController = require("../controllers/controller.login");
const userController = require('../controllers/register.controller');

router.post("/login", authController.login);

module.exports = router;
