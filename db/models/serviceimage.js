"use strict";
const { Model } = require("sequelize");
const Service = require("./service");

module.exports = (sequelize, DataTypes) => {
  class ServiceImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceImage.init(
    {
      serviceId: {
        type: DataTypes.INTEGER,
        references: {
          model: Service,
          key: "id",
        },
      },
      imageUrl: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ServiceImage",
      updatedAt: "updateTimestamp",
    }
  );
  return ServiceImage;
};
