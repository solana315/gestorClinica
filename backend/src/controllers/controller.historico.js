const sequelize = require('../models/database');
const { initModels } = require('../models/init-models');
const { DataTypes } = require('sequelize');

const models = initModels(sequelize);
const { HistoricoMedico, User } = models;

const controller = {};

// GET todos os históricos médicos
controller.get_all_historicos = async (req, res) => {
  try {
    const historicos = await HistoricoMedico.findAll({
      order: [['id_historico', 'ASC']]
    });

    return res.status(200).json({ 
      message: 'Históricos médicos listados com sucesso',
      count: historicos.length,
      historicos 
    });
  } catch (error) {
    console.error('Erro ao listar históricos médicos:', error);
    return res.status(500).json({ 
      message: 'Erro do servidor',
      error: error.message
    });
  }
};

// GET histórico médico por ID 
controller.get_historico_medico = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ 
        message: 'ID do utilizador é obrigatório' 
      });
    }

    // Verificar se o utilizador existe
    const utilizador = await User.findByPk(id);
    if (!utilizador) {
      return res.status(404).json({ 
        message: 'Utilizador não encontrado' 
      });
    }

    // histórico médico do utilizador
    const historicoMedico = await HistoricoMedico.findOne({
      where: { id: id }
    });

    if (!historicoMedico) {
      return res.status(404).json({ 
        message: 'Histórico médico não encontrado para este utilizador' 
      });
    }

    return res.status(200).json({ 
      message: 'Histórico médico obtido com sucesso',
      historicoMedico 
    });
  } catch (error) {
    console.error('Erro ao obter histórico médico:', error);
    return res.status(500).json({ 
      message: 'Erro do servidor',
      error: error.message
    });
  }
};

module.exports = controller;