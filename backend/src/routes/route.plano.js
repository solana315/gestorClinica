const express = require('express');
const router = express.Router();
const planoController = require('../controllers/controller.plano');

console.log('route.plano loaded');

// Criar novo plano
router.post('/plano', planoController.criar_plano);

module.exports = router;

