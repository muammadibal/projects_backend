"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      transactionCode: {
        type: Sequelize.STRING
      },
      transactionPrice: {
        type: Sequelize.INTEGER
      },
      categoryTransactionStatusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CategoryTransactionStatuse",
          key: "id"
        }
      },
      paymentUrl: {
        type: Sequelize.TEXT
      },
      paymentVerifyImage: {
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
    await queryInterface.dropTable("Transactions");
  }
};
