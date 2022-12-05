"use strict";
const { Model } = require("sequelize");
const User = require("./user");
const Product = require("./product");

module.exports = (sequelize, DataTypes) => {
  class ProductCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductCart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ProductCart",
      
    }
  );
  return ProductCart;
};
