'use strict';
const {faker} = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserProfiles', Array(100).fill('').map((_, i) => ({
      userId: i + 1,
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthDate: faker.date.birthdate(),
      about: faker.lorem.text(),
      gender: 2,
      // location: faker.locale(),
      // city: faker.date(),
      // province: faker.date(),
      // zipCode: faker.date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserProfiles', null, {});
  }
};
