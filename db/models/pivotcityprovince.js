"use strict";
const { Model } = require("sequelize");
const City = require("./city");
const Province = require("./province");
module.exports = (sequelize, DataTypes) => {
  class PivotCityProvince extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PivotCityProvince.belongsToMany(models.Province, {
        foreignKey: "id",
      });
      PivotCityProvince.belongsToMany(models.City, {
        foreignKey: "id",
      });
      // define association here
    }
  }
  PivotCityProvince.init(
    {
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
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "PivotCityProvince",
    }
  );
  return PivotCityProvince;
};
