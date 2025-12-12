const bcrypt = require('bcryptjs');
const sequelize = require('../models/database');
const { initModels } = require('../models/init-models');
const { User } = initModels(sequelize);

// Regista um novo utilizador
const register = async (req, res) => {
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

module.exports = {
	register,
};
