"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserProfile.init(
    {
      userId: DataTypes.INTEGER,
      username: DataTypes.STRING,
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      about: DataTypes.TEXT,
      gender: DataTypes.INTEGER,
      avatar: DataTypes.TEXT,
      location: DataTypes.STRING,
      city: DataTypes.INTEGER,
      province: DataTypes.INTEGER,
      zipCode: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserProfile",
      updatedAt: "updateTimestamp",
    }
  );
  return UserProfile;
};
