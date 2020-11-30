'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // name of Source model
      'addressId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'addresses', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users', // name of Source model
      'addressId' // key we want to remove
    );
  }
};
