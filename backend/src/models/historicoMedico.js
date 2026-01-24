module.exports = (sequelize, DataTypes) => {
  const HistoricoMedico = sequelize.define(
    'historico_medico',
    {
      id_historico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'utilizador',
          key: 'id'
        }
      },
      medicamentos: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      alergias: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      gravidade: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      internacoes: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: 'historico_medico',
      timestamps: false,
      freezeTableName: true
    }
  );

  return HistoricoMedico;
};
