"use strict";
const { Model } = require("sequelize");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class UserWallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId"
      });
    }
  }
  UserWallet.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id"
        }
      },
      balance: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "UserWallet"
    }
  );
  return UserWallet;
};
