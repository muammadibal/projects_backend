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
      this.hasMany(models.Province, {
        foreignKey: "provinceId"
      });
      this.hasMany(models.City, {
        foreignKey: "cityId"
      });
      // define association here
    }
  }
  PivotCityProvince.init(
    {
      cityId: {
        type: DataTypes.INTEGER,
        references: {
          model: "City",
          key: "id"
        }
      },
      provinceId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Province",
          key: "id"
        }
      },
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "PivotCityProvince"
    }
  );
  return PivotCityProvince;
};
