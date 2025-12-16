const sequelize = require('../models/database');
const { initModels } = require('../models/init-models');
const { DataTypes } = require('sequelize');

const models = initModels(sequelize);
const { Dependente } = models;

const controller = {};

controller.criar_dependente = async (req, res) => {
  try {
    const {
      nome,
      data_nascimento,
      sexo,
      nif,
      numero_utente,
      ativo,
      id,
      id_dependente,
      id_responsavel,
    } = req.body;

    // tenta obter o id do utilizador por várias fontes:
    // 1) `req.user.id` (se houver autenticação middleware),
    // 2) header `x-user-id`,
    // 3) campos do body: `id`, `id_dependente`, `id_responsavel`.
    const responsavelId = (req.user && req.user.id) || req.headers['x-user-id'] || id || id_dependente || id_responsavel;

    if (!nome || !data_nascimento || !responsavelId) {
      return res.status(400).json({ 
        message: 'Campos obrigatórios: nome, data_nascimento, id (do responsável)' 
      });
    }

    const newDependente = await Dependente.create({
      nome,
      data_nascimento,
      sexo: sexo || null,
      nif: nif || null,
      numero_utente: numero_utente || null,
      ativo: typeof ativo === 'boolean' ? ativo : true,
      id: responsavelId,
    });

    return res.status(201).json({ 
      message: 'Dependente criado com sucesso', 
      dependente: newDependente 
    });
  } catch (error) {
    console.error('Erro ao criar dependente:', error);
    return res.status(500).json({ 
      message: 'Erro do servidor',
      error: error.message
    });
  }
};

module.exports = controller;