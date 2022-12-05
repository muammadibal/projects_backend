"use strict";
const { Model } = require("sequelize");
const Product = require("./product");

module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductImage.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: "id",
        },
      },
      imageUrl: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ProductImage",
      updatedAt: "updateTimestamp",
    }
  );
  return ProductImage;
};
