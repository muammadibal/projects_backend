"use strict";
const { Model } = require("sequelize");
const User = require("./user");
const CategoryProduct = require("./categoryproduct");
const CategoryProductCondition = require("./categoryproductcondition");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: "userId"
      });
      this.hasMany(models.CategoryProduct, {
        foreignKey: "categoryProductId"
      });
      this.hasMany(models.CategoryProductCondition, {
        foreignKey: "categoryProductConditionId"
      });
      // define association here
    }
  }
  Product.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id"
        }
      },
      name: DataTypes.STRING,
      categoryProductId: {
        type: DataTypes.INTEGER,
        references: {
          model: "CategoryProduct",
          key: "id"
        }
      },
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      thumbnail: DataTypes.TEXT,
      isActive: DataTypes.INTEGER,
      location: DataTypes.TEXT,
      categoryProductConditionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "CategoryProductCondition",
          key: "id"
        }
      },
      discount: DataTypes.INTEGER,
      isDiscount: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "Product"
    }
  );
  return Product;
};
