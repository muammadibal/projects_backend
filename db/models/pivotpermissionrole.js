"use strict";
const { Model } = require("sequelize");
const Role = require("./role");
const Permission = require("./permission");

module.exports = (sequelize, DataTypes) => {
  class PivotPermissionRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PivotPermissionRole.belongsToMany(models.Role, {
        foreignKey: "id",
      });
      PivotPermissionRole.belongsToMany(models.Permission, {
        foreignKey: "id",
      });
      // define association here
    }
  }
  PivotPermissionRole.init(
    {
      roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: Role,
          key: "id",
        },
      },
      permissionId: {
        type: DataTypes.INTEGER,
        references: {
          model: Permission,
          key: "id",
        },
      },
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "PivotPermissionRole",
    }
  );
  return PivotPermissionRole;
};
