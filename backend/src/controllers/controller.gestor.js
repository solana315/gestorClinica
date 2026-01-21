const sequelize = require('../models/database');
const { initModels } = require('../models/init-models');
const { DataTypes } = require('sequelize');

const models = initModels(sequelize);
const { User } = models;

const controller = {};

controller.criar_gestor = async (req, res) => {
  try {
    const {
      nome,
      email,
      telefone,
      senha,
      sexo,
      endereco,
      nif,
      data_nascimento,
      numero_utente
    } = req.body;

    // Validar campos obrigatórios
    if (!nome || !email || !telefone || !senha) {
      return res.status(400).json({ 
        message: 'Nome, email, telefone e senha são obrigatórios' 
      });
    }

    // Verificar se o email já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ 
        message: 'Email já cadastrado' 
      });
    }

    // Verificar se o telefone já existe
    const existingPhone = await User.findOne({ where: { telefone } });
    if (existingPhone) {
      return res.status(409).json({ 
        message: 'Telefone já cadastrado' 
      });
    }

    // Criar o gestor
    const novoGestor = await User.create({
      nome,
      email,
      telefone,
      senha,
      tipo: 'admin',
      ativo: true,
      sexo,
      endereco,
      nif,
      data_nascimento,
      numero_utente
    });

    return res.status(201).json({ 
      message: 'Gestor criado com sucesso',
      gestor: {
        id: novoGestor.id,
        nome: novoGestor.nome,
        email: novoGestor.email,
        telefone: novoGestor.telefone,
        tipo: novoGestor.tipo,
        ativo: novoGestor.ativo
      }
    });
  } catch (error) {
    console.error('Erro ao criar gestor:', error);
    return res.status(500).json({ 
      message: 'Erro do servidor',
      error: error.message
    });
  }
};

controller.get_gestores = async (req, res) => {
  try {
    const gestores = await User.findAll({
      where: { 
        tipo: 'admin',
        ativo: true
      },
      attributes: ['id', 'nome', 'email', 'telefone', 'tipo', 'ativo', 'data_inscricao'],
      order: [['id', 'ASC']]
    });

    return res.status(200).json({ 
      message: 'Gestores listados com sucesso',
      count: gestores.length,
      gestores 
    });
  } catch (error) {
    console.error('Erro ao listar gestores:', error);
    return res.status(500).json({ 
      message: 'Erro do servidor',
      error: error.message
    });
  }
};

controller.get_gestor = async (req, res) => {
  try {
    const { id } = req.params;

    const gestor = await User.findOne({
      where: { 
        id,
        tipo: 'admin',
        ativo: true
      },
      attributes: ['id', 'nome', 'email', 'telefone', 'tipo', 'ativo', 'sexo', 'endereco', 'nif', 'data_nascimento', 'numero_utente', 'data_inscricao']
    });

    if (!gestor) {
      return res.status(404).json({ 
        message: 'Gestor não encontrado' 
      });
    }

    return res.status(200).json({ 
      message: 'Gestor encontrado',
      gestor 
    });
  } catch (error) {
    console.error('Erro ao buscar gestor:', error);
    return res.status(500).json({ 
      message: 'Erro do servidor',
      error: error.message
    });
  }
};

controller.editar_gestor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, telefone, senha, sexo, endereco, nif, data_nascimento, numero_utente } = req.body;

    const gestor = await User.findOne({
      where: { 
        id,
        tipo: 'admin',
        ativo: true
      }
    });

    if (!gestor) {
      return res.status(404).json({ 
        message: 'Gestor não encontrado' 
      });
    }

    // Verificar se o email já existe em outro usuário
    if (email && email !== gestor.email) {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ 
          message: 'Email já está em uso' 
        });
      }
    }

    // Verificar se o telefone já existe em outro usuário
    if (telefone && telefone !== gestor.telefone) {
      const existingPhone = await User.findOne({ where: { telefone } });
      if (existingPhone) {
        return res.status(409).json({ 
          message: 'Telefone já está em uso' 
        });
      }
    }

    // Atualizar campos
    if (nome) gestor.nome = nome;
    if (email) gestor.email = email;
    if (telefone) gestor.telefone = telefone;
    if (senha) gestor.senha = senha;
    if (sexo) gestor.sexo = sexo;
    if (endereco) gestor.endereco = endereco;
    if (nif) gestor.nif = nif;
    if (data_nascimento) gestor.data_nascimento = data_nascimento;
    if (numero_utente) gestor.numero_utente = numero_utente;

    await gestor.save();

    return res.status(200).json({ 
      message: 'Gestor atualizado com sucesso',
      gestor: {
        id: gestor.id,
        nome: gestor.nome,
        email: gestor.email,
        telefone: gestor.telefone,
        tipo: gestor.tipo,
        ativo: gestor.ativo
      }
    });
  } catch (error) {
    console.error('Erro ao editar gestor:', error);
    return res.status(500).json({ 
      message: 'Erro do servidor',
      error: error.message
    });
  }
};

controller.deletar_gestor = async (req, res) => {
  try {
    const { id } = req.params;

    const gestor = await User.findOne({
      where: { 
        id,
        tipo: 'admin',
        ativo: true
      }
    });

    if (!gestor) {
      return res.status(404).json({ 
        message: 'Gestor não encontrado' 
      });
    }

    await gestor.destroy();

    return res.status(200).json({ 
      message: 'Gestor deletado com sucesso' 
    });
  } catch (error) {
    console.error('Erro ao deletar gestor:', error);
    return res.status(500).json({ 
      message: 'Erro do servidor',
      error: error.message
    });
  }
};

module.exports = controller;
