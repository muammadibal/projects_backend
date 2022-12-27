"use strict";
const { Model } = require("sequelize");
const City = require("./city");

module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.City, {
        foreignKey: "cityId"
      });
      // define association here
    }
  }
  Province.init(
    {
      name: DataTypes.STRING,
      cityId: {
        type: DataTypes.INTEGER,
        references: {
          model: "City",
          key: "id"
        }
      },
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "Province"
    }
  );
  return Province;
};
