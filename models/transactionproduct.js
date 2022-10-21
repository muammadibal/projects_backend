"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransactionProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransactionProduct.init(
    {
      transactionId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      productName: DataTypes.STRING,
      productPrice: DataTypes.INTEGER,
      productThumbnail: DataTypes.TEXT,
      discount: DataTypes.INTEGER,
      isDiscount: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "TransactionProduct",
      updatedAt: "updateTimestamp",
    }
  );
  return TransactionProduct;
};
