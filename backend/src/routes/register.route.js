const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controller');

console.log('register.route loaded');

// Registar novo utilizador
router.post('/register', registerController.register);

// Apagar utilizador por id (params)
router.delete('/user/:id', registerController.user_delete);

// Listar utilizadores e procurar por id/nome
router.get('/listusers', registerController.list_users);
router.get('/listusers/:id', registerController.list_users);

module.exports = router;
