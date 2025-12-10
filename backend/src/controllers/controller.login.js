const sequelize = require('../models/database');
const { initModels } = require('../models/init-models');
const { User } = initModels(sequelize);

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // procura user admin e ativo
    const user = await User.findOne({
      where: {
        email,
        tipo: "admin",
        ativo: true,
      },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Credenciais inválidas ou sem permissão" });
    }

    // suporte para senhas guardadas em texto simples (varchar) ou hash bcrypt
    let ok = false;
    if (user.senha && /^\$2[aby]\$/.test(user.senha)) {


      // senha parece ser um hash bcrypt -> precisa de bcryptjs
      let bcrypt;
      try {
        bcrypt = require('bcryptjs');
      } catch (e) {
        console.error('bcryptjs not installed', e);
        return res.status(500).json({ message: 'Server configuration error: bcrypt missing' });
      }
      ok = await bcrypt.compare(senha, user.senha);
    } else {

      // compara texto simples 
      ok = user.senha === senha;
    }

    if (!ok) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    // gerar um JWT; por enquanto só devolve dados básicos
    return res.json({
      id: user.id,
      nome: user.nome,
      email: user.email,
      tipo: user.tipo,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro no login" });
  }
};
