"use strict";
const { Model } = require("sequelize");
const CategoryTransactionStatusId = require("./categorytransactionstatus");

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsToMany(models.TransactionWallet, {
        foreignKey: "transactionId",
      });
      Transaction.belongsToMany(models.TransactionProject, {
        foreignKey: "transactionId",
      });
      Transaction.belongsToMany(models.TransactionProduct, {
        foreignKey: "transactionId",
      });
      Transaction.hasMany(models.CategoryTransactionStatus, {
        foreignKey: "id",
      });
    }
  }
  Transaction.init(
    {
      transactionCode: DataTypes.STRING,
      transactionPrice: DataTypes.INTEGER,
      categoryTransactionStatusId: {
        type: DataTypes.INTEGER,
        references: {
          model: CategoryTransactionStatusId,
          key: "id",
        },
      },
      paymentUrl: DataTypes.TEXT,
      paymentVerifyImage: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
