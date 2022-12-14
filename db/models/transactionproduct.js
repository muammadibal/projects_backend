"use strict";
const { Model } = require("sequelize");
const Transaction = require("./transaction");
const User = require("./user");
const Product = require("./product");

module.exports = (sequelize, DataTypes) => {
  class TransactionProduct extends Model {
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
      this.hasMany(models.Product, {
        foreignKey: "productId"
      });
      // define association here
    }
  }
  TransactionProduct.init(
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
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Product",
          key: "id"
        }
      },
      productName: DataTypes.STRING,
      productPrice: DataTypes.INTEGER,
      productThumbnail: DataTypes.TEXT,
      discount: DataTypes.INTEGER,
      isDiscount: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "TransactionProduct"
    }
  );
  return TransactionProduct;
};
