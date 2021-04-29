'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate(models) {
      this.belongsTo(models.TransactionTypes, {
        foreignKey: 'transaction_type'
      })
      this.belongsTo(models.Accounts, {
        foreignKey: 'account_ori'
      })
      this.belongsTo(models.Accounts, {
        foreignKey: 'account_des'
      })
    }
  };
  Transactions.init({
    account_ori: DataTypes.INTEGER,
    account_des: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    transaction_type: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'Transactions',
  });
  return Transactions;
};