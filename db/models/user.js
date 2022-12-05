"use strict";
const { Model, STRING, INTEGER, DATE } = require("sequelize");
const db = require(".");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: STRING,
      password: STRING,
      role: INTEGER,
      deletedAt: DATE,
    },
    {
      sequelize: db.sequelize,
      modelName: "User",
      updatedAt: "updateTimestamp",
    }
  );
  return User;
};
