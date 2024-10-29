'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
    email: 'admin@gmail.com',
    password: '123456',
    firstName: 'John',
    lastName: 'Doe',
    address: 'USA',
    gender: 1,
    roleId: '',
    positionId: '',
    
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
    },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
