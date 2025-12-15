// src/models/plano.js
module.exports = (sequelize, DataTypes) => {
  const Plano = sequelize.define('plano_tratamento', {
    id_tratamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
        id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    tableName: 'plano_tratamento',
    timestamps: false,
  });

  return Plano;
};