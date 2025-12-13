const bcrypt = require('bcryptjs');
const sequelize = require('../models/database');
const { initModels } = require('../models/init-models');
const { Op } = require('sequelize');
const models = initModels(sequelize);
const { User } = models;




// Regista um novo utilizador
const controller = {};
controller.register = async (req, res) => {
	try {
		const {
			nome,
			email,
			telefone,
			senha,
			tipo = 'user',
			sexo,
			endereco,
			nif,
			data_nascimento,
			numero_utente,
		} = req.body;

		// Validação mínima
		if (!nome || !email || !senha || !telefone) {
			return res.status(400).json({ message: 'Campos obrigatórios em falta' });
		}

		// Verificar se email ou telefone já existem
		const existsEmail = await User.findOne({ where: { email } });
		if (existsEmail) {
			return res.status(409).json({ message: 'Email já registado' });
		}

		const existsTelefone = await User.findOne({ where: { telefone } });
		if (existsTelefone) {
			return res.status(409).json({ message: 'Telefone já registado' });
		}

		// Hash da senha
		const hashed = await bcrypt.hash(senha, 10);

		const newUser = await User.create({
			nome,
			email,
			telefone,
			senha: hashed,
			tipo,
			sexo,
			endereco,
			nif,
			data_nascimento,
			numero_utente,
		});

		// Não devolver a senha no response
		const { senha: _senha, ...userWithoutSenha } = newUser.toJSON();

		return res.status(201).json({ message: 'Utilizador registado com sucesso', user: userWithoutSenha });
	} catch (error) {
		console.error('Erro no registo:', error);
		return res.status(500).json({ message: 'Erro do servidor' });
	}
};


// Apaga um utilizador por id
controller.user_delete = async (req, res) => {
	try {
		const { id } = req.params;

		if (!id) return res.status(400).json({ message: 'ID do utilizador em falta' });

		const user = await User.findByPk(id);
		if (!user) return res.status(404).json({ message: 'Utilizador não encontrado' });

		await user.destroy();

		return res.status(200).json({ message: 'Utilizador apagado com sucesso' });
	} catch (error) {
		console.error('Erro ao apagar utilizador:', error);
		return res.status(500).json({ message: 'Erro do servidor' });
	}
};


controller.list_users = async (req, res) => {
	try {
		const paramId = req.params && req.params.id;
		const queryId = req.query && req.query.id;
		const nome = req.query && req.query.nome;

		const idToFind = paramId || queryId;
		if (idToFind) {
			const user = await User.findByPk(idToFind, { attributes: { exclude: ['senha'] } });
			if (!user) return res.status(404).json({ message: 'Utilizador não encontrado' });
			return res.status(200).json(user);
		}

		// Pesquisa por nome 
		if (nome) {
			const users = await User.findAll({
				where: sequelize.where(sequelize.fn('LOWER', sequelize.col('nome')), Op.like, `%${nome.toLowerCase()}%`),
				attributes: { exclude: ['senha'] },
			});
			return res.status(200).json(users);
		}

		//retorna todos
		const users = await User.findAll({ attributes: { exclude: ['senha'] } });
		return res.status(200).json(users);
	} catch (error) {
		console.error('Erro ao listar utilizadores:', error);
		return res.status(500).json({ message: 'Erro do servidor' });
	}
};





module.exports = controller;