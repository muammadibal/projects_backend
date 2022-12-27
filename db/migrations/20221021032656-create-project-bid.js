"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProjectBids", {
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
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Project",
          key: "id"
        }
      },
      isChoosen: {
        type: Sequelize.INTEGER
      },
      userPortfolioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "UserPortfolio",
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
    await queryInterface.dropTable("ProjectBids");
  }
};
