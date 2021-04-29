'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    static associate(models) {
      this.hasMany(models.Transactions, {
        foreignKey: 'account_ori'
      })
      this.hasMany(models.Transactions, {
        foreignKey: 'account_des'
      })
      this.belongsTo(models.AccountTypes, {
        foreignKey: 'type'
      })
      this.belongsTo(models.Clients, {
        foreignKey: 'client_id'
      })
    }
  };
  Accounts.init({
    account_no: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'Accounts',
  });
  return Accounts;
};