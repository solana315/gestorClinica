const express = require('express');
const router = express.Router();
const dependentesController = require('../controllers/controller.dependentes');

console.log('route.dependentes loaded');

// Mounted in app.js at '/dependentes' -> use '/' here for POST /dependentes
router.post('/', dependentesController.criar_dependente);

// DELETE /dependentes/:id -> elimina um dependente pelo id
router.delete('/:id', dependentesController.delete_dependente);

module.exports = router;

