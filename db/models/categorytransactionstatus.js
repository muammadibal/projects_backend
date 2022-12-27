"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryTransactionStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoryTransactionStatus.init(
    {
      name: DataTypes.STRING,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "CategoryTransactionStatus"
    }
  );
  return CategoryTransactionStatus;
};
