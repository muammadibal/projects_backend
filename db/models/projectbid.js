"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectBid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectBid.init(
    {
      userId: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
      isChoosen: DataTypes.INTEGER,
      userPortfolioId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ProjectBid",
      updatedAt: "updateTimestamp",
    }
  );
  return ProjectBid;
};
