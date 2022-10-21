"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransactionProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransactionProject.init(
    {
      transactionId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
      projectName: DataTypes.STRING,
      projectPrice: DataTypes.INTEGER,
      projectThumbnail: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "TransactionProject",
      updatedAt: "updateTimestamp",
    }
  );
  return TransactionProject;
};
