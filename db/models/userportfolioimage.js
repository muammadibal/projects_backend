"use strict";
const { Model } = require("sequelize");
const UserPortfolio = require("./userportfolio");

module.exports = (sequelize, DataTypes) => {
  class UserPortfolioImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPortfolioImage.init(
    {
      portfolioId: {
        type: DataTypes.INTEGER,
        references: {
          model: UserPortfolio,
          key: "id",
        },
      },
      imageUrl: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserPortfolioImage",
      
    }
  );
  return UserPortfolioImage;
};
