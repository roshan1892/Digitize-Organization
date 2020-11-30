'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   var sql = queryInterface.createTable('users',{
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      validate:{
        notEmpty:{
          args:true,
          msg:'firstName is required.'
        }
      }
    },
    lastName:{
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      validate:{
        notEmpty:{
          args:true,
          msg:'lastName is required.'
        }
      }
    },
    phoneNumber:{
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      validate:{
        notEmpty:{
          args:true,
          msg:'phoneNumber is required.'
        }
      }
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      validate:{
        notEmpty:{
          args:true,
          msg:'email is required.'
        }
      }
    },
    createdAt: Sequelize.DATE,
    updatedAt:Sequelize.DATE
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users")
  }
};
