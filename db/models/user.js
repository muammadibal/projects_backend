"use strict";
const { Model } = require("sequelize");
const UserProfile = require("./userprofile");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.UserProfile, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      User.hasOne(models.UserPortfolio, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      User.hasOne(models.UserWallet, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      User.hasMany(models.TransactionWallet, {
        foreignKey: "userId",
      });
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: 8,
          // is: /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/
        },
      },
      role: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
