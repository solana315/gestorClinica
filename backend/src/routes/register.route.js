const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

console.log('register.route loaded');

// Registar novo utilizador
router.post('/register', userController.register);

// Apagar utilizador por id (params)
router.delete('/user/:id', userController.user_delete);

module.exports = router;
