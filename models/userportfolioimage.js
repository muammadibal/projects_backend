"use strict";
const { Model } = require("sequelize");
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
      portfolioId: DataTypes.INTEGER,
      imageUrl: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserPortfolioImage",
      updatedAt: "updateTimestamp",
    }
  );
  return UserPortfolioImage;
};
