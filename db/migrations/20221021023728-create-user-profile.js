"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserProfiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id"
        }
      },
      userName: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      middleName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      about: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.INTEGER
      },
      avatar: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.INTEGER
      },
      province: {
        type: Sequelize.INTEGER
      },
      zipCode: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable("UserProfiles");
  }
};
