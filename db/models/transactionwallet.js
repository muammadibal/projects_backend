"use strict";
const { Model } = require("sequelize");
const Transaction = require("./transaction");
const User = require("./user");
const TopUp = require("./topup");

module.exports = (sequelize, DataTypes) => {
  class TransactionWallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Transaction, {
        foreignKey: "transactionId"
      });
      this.belongsToMany(models.User, {
        foreignKey: "userId"
      });
      this.hasMany(models.Topup, {
        foreignKey: "topupId"
      });
      // define association here
    }
  }
  TransactionWallet.init(
    {
      transactionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Transaction",
          key: "id"
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id"
        }
      },
      topupId: {
        type: DataTypes.INTEGER,
        references: {
          model: "TopUp",
          key: "id"
        }
      },
      topupAmount: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      isDiscount: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "TransactionWallet"
    }
  );
  return TransactionWallet;
};
