"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TransactionProducts", {
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
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Product",
          key: "id"
        }
      },
      productName: {
        type: Sequelize.STRING
      },
      productPrice: {
        type: Sequelize.INTEGER
      },
      productThumbnail: {
        type: Sequelize.TEXT
      },
      discount: {
        type: Sequelize.INTEGER
      },
      isDiscount: {
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
    await queryInterface.dropTable("TransactionProducts");
  }
};
