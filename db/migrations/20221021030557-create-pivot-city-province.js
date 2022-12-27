"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PivotCityProvinces", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "City",
          key: "id"
        }
      },
      provinceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Province",
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
    await queryInterface.dropTable("PivotCityProvinces");
  }
};
