const express = require('express');
const router = express.Router();
const planoController = require('../controllers/controller.plano');

console.log('router.plano loaded');

// Criar novo plano
router.post('/', planoController.criar_plano);

module.exports = router;

