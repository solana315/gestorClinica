const { DataTypes } = require("sequelize");

function initModels(sequelize) {
  const User = require("./User")(sequelize, DataTypes);
  const Plano = require("./plano")(sequelize, DataTypes);

  return {
    User,
    Plano,
  };
}

module.exports = { initModels };
