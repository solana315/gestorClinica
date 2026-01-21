const express = require('express');
const router = express.Router();
const gestorController = require('../controllers/controller.gestor');

console.log('route.gestor loaded');

// GET todos os gestores
router.get('/', gestorController.get_gestores);

// GET gestor por ID
router.get('/:id', gestorController.get_gestor);

// POST gestor
router.post('/', gestorController.criar_gestor);

// PUT/PATCH gestor
router.put('/:id', gestorController.editar_gestor);
router.patch('/:id', gestorController.editar_gestor);

// DELETE gestor
router.delete('/:id', gestorController.deletar_gestor);

module.exports = router;
