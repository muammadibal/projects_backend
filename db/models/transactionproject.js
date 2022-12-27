"use strict";
const { Model } = require("sequelize");
const Transaction = require("./transaction");
const User = require("./user");
const Project = require("./project");

module.exports = (sequelize, DataTypes) => {
  class TransactionProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Transaction, {
        foreignKey: "transactionId"
      });
      this.belongsToMany(models.User, {
        foreignKey: "userId"
      });
      this.hasMany(models.Project, {
        foreignKey: "projectId"
      });
      // define association here
    }
  }
  TransactionProject.init(
    {
      transactionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Transaction",
          key: "id"
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id"
        }
      },
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Project",
          key: "id"
        }
      },
      projectName: DataTypes.STRING,
      projectPrice: DataTypes.INTEGER,
      projectThumbnail: DataTypes.TEXT,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "TransactionProject"
    }
  );
  return TransactionProject;
};
