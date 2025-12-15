const sequelize = require('../models/database');
const { initModels } = require('../models/init-models');
const { DataTypes } = require('sequelize');

const models = initModels(sequelize);
const { Plano } = models;

const controller = {};

controller.criar_plano = async (req, res) => {
  try {
    const { id, data_inicio, data_fim, descricao, status } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Campo id (FK para utilizador) em falta' });
    }

    const newPlano = await Plano.create({
      id,
      data_inicio: data_inicio || null,
      data_fim: data_fim || null,
      descricao: descricao || null,
      status: status || null,
    });

    return res.status(201).json({ message: 'Plano criado com sucesso', plano: newPlano });
  } catch (error) {
    console.error('Erro ao criar plano:', error);
    return res.status(500).json({ message: 'Erro do servidor' });
  }
};

module.exports = controller;
