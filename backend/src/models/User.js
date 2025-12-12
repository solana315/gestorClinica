// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      tipo: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false,
        defaultValue: "user",
      },
      ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      data_inscricao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexo: {
        type: DataTypes.STRING,
      },
      endereco: {
        type: DataTypes.STRING,
      },
      nif: {
        type: DataTypes.STRING,
      },
      data_nascimento: {
        type: DataTypes.DATE,
      },
      numero_utente: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: "utilizador",
      timestamps: false,
    }
  );

  return User;
};
