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
    } = req.body;

    if (!nome || !data_nascimento || !id) {
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
      id: id,  
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

controller.delete_dependente = async (req, res) => {
  try {
    const id = req.params.id || req.params.id_dependente || req.query.id || req.body.id_dependente;

    if (!id) {
      return res.status(400).json({ message: 'ID do dependente é obrigatório' });
    }

    const idNum = Number(id);
    if (Number.isNaN(idNum)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const dependente = await Dependente.findOne({ where: { id_dependente: idNum } });

    if (!dependente) {
      return res.status(404).json({ message: 'Dependente não encontrado' });
    }

    await dependente.destroy();

    return res.status(200).json({ message: 'Dependente eliminado com sucesso' });
  } catch (error) {
    console.error('Erro ao eliminar dependente:', error);
    return res.status(500).json({ message: 'Erro do servidor', error: error.message });
  }
};

module.exports = controller;