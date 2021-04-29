'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionTypes extends Model {
    static associate(models) {
      this.hasMany(models.Transactions, {
        foreignKey: 'transaction_type'
      })
    }
  };
  TransactionTypes.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'TransactionTypes',
  });
  return TransactionTypes;
};