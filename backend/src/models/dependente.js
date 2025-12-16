// src/models/Dependente.js
module.exports = (sequelize, DataTypes) => {
  const Dependente = sequelize.define(
    'Dependente',
    {
      id_dependente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sexo: DataTypes.STRING,
      nif: DataTypes.STRING,
      numero_utente: DataTypes.STRING,
      ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'utilizador', 
          key: 'id'
        }
      }
    },
    {
      tableName: 'dependentes',
      timestamps: false,
    }
  );

  Dependente.associate = (models) => {
    Dependente.belongsTo(models.User, {  
      foreignKey: 'id', 
      as: 'utilizador',
      onDelete: 'CASCADE',
    });
  };

  return Dependente;
};