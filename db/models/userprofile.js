"use strict";
const { Model } = require("sequelize");
const User = require("./user");
const Gender = require("./gender");
const City = require("./city");
const Province = require("./province");

module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserProfile.belongsTo(models.User, {
        foreignKey: "id",
      });
    }
  }
  UserProfile.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      username: DataTypes.STRING,
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      about: DataTypes.TEXT,
      genderId: {
        type: DataTypes.INTEGER,
        references: {
          model: Gender,
          key: "id",
        },
      },
      avatar: DataTypes.TEXT,
      location: DataTypes.STRING,
      cityId: {
        type: DataTypes.INTEGER,
        references: {
          model: City,
          key: "id",
        },
      },
      provinceId: {
        type: DataTypes.INTEGER,
        references: {
          model: Province,
          key: "id",
        },
      },
      zipCode: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserProfile",
    }
  );
  return UserProfile;
};
