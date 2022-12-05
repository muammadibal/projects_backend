"use strict";
const { Model } = require("sequelize");
const Project = require("./project");

module.exports = (sequelize, DataTypes) => {
  class ProjectImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectImage.init(
    {
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: Project,
          key: "id",
        },
      },
      imageUrl: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ProjectImage",
      updatedAt: "updateTimestamp",
    }
  );
  return ProjectImage;
};
