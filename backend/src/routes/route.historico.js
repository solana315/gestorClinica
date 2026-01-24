const express = require("express");
const router = express.Router();
const historicoController = require("../controllers/controller.historico");

// GET todos os históricos médicos
router.get("/historico-medico", historicoController.get_all_historicos);

// GET histórico médico por ID do utilizador
router.get("/historico-medico/:id", historicoController.get_historico_medico);

module.exports = router;
