"use strict";
const { Model } = require("sequelize");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service.init(
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
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      price: DataTypes.INTEGER,
      isActive: DataTypes.INTEGER,
      location: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Service",
      
    }
  );
  return Service;
};
