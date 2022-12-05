"use strict";
const { Model } = require("sequelize");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class UserPortfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPortfolio.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserPortfolio",
      
    }
  );
  return UserPortfolio;
};
