"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PivotCityProvince extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PivotCityProvince.init(
    {
      cityId: DataTypes.INTEGER,
      provinceId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "PivotCityProvince",
      updatedAt: "updateTimestamp",
    }
  );
  return PivotCityProvince;
};
