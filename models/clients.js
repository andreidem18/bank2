'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    static associate(models) {
      this.hasMany(models.Accounts, {
        foreignKey: 'client_id'
      })
    }
  };
  Clients.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Clients',
  });
  return Clients;
};