"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransactionWallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransactionWallet.init(
    {
      transactionId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      topupId: DataTypes.INTEGER,
      topupAmount: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      isDiscount: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "TransactionWallet",
      updatedAt: "updateTimestamp",
    }
  );
  return TransactionWallet;
};
