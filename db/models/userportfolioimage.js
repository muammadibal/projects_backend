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
      this.hasOne(models.UserPortfolio, {
        foreignKey: "portfolioId"
      });
    }
  }
  UserPortfolioImage.init(
    {
      portfolioId: {
        type: DataTypes.INTEGER,
        references: {
          model: "UserPortfolio",
          key: "id"
        }
      },
      imageUrl: DataTypes.TEXT,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "UserPortfolioImage"
    }
  );
  return UserPortfolioImage;
};
