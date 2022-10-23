'use strict';
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', Array(100).fill('').map((_, i) => ({
      email: faker.internet.email(),
      password: bcrypt.hashSync('rahasia', 10),
      role: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
