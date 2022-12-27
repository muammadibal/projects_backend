"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
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
      name: {
        type: Sequelize.STRING
      },
      categoryProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CategoryProduct",
          key: "id"
        }
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      thumbnail: {
        type: Sequelize.TEXT
      },
      isActive: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.TEXT
      },
      categoryProductConditionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CategoryProductConditions",
          key: "id"
        }
      },
      discount: {
        type: Sequelize.INTEGER
      },
      isDiscount: {
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      sold: {
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
    await queryInterface.dropTable("Products");
  }
};
