'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('addresses',{
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      temporaryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      permanentAddress:{
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      permanentHouseNumber:{
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      createdAt: Sequelize.DATE,
      updatedAt:Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("addresses")
  }
};
