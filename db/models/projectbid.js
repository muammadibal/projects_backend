"use strict";
const { Model } = require("sequelize");
const User = require("./user");
const Project = require("./project");
const UserPortfolio = require("./userportfolio");

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
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: Project,
          key: "id",
        },
      },
      isChoosen: DataTypes.INTEGER,
      userPortfolioId: {
        type: DataTypes.INTEGER,
        references: {
          model: UserPortfolio,
          key: "id",
        },
      },
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
