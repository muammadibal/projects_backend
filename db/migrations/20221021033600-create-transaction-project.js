"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TransactionProjects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      transactionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Transaction",
          key: "id"
        }
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
      projectName: {
        type: Sequelize.STRING
      },
      projectPrice: {
        type: Sequelize.INTEGER
      },
      projectThumbnail: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable("TransactionProjects");
  }
};
