"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      categoryProductId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      thumbnail: DataTypes.TEXT,
      isActive: DataTypes.INTEGER,
      location: DataTypes.TEXT,
      categoryProductConditionId: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      isDiscount: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
      updatedAt: "updateTimestamp",
    }
  );
  return Product;
};