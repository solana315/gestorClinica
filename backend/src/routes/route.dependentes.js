const express = require('express');
const router = express.Router();
const dependentesController = require('../controllers/controller.dependentes');

console.log('route.dependentes loaded');

// Mounted in app.js at '/dependentes' -> use '/' here for POST /dependentes
router.post('/', dependentesController.criar_dependente);

module.exports = router;

