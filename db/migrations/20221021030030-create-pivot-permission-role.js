"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PivotPermissionRoles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Role",
          key: "id"
        }
      },
      permissionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Permission",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PivotPermissionRoles");
  }
};
