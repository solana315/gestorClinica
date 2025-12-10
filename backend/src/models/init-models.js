const { DataTypes } = require("sequelize");

function initModels(sequelize) {
  const User = require("./User")(sequelize, DataTypes);

  return {
    User
  };
}

module.exports = { initModels };
