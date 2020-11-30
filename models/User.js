const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {

const User = sequelize.define('User',{
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    validate:{
      notEmpty:{
        args:true,
        msg:'email is required.'
      }
    }
  }
});

User.associate =  (models)=>{
  User.belongsTo(models.Address, { foreignKey: 'addressId' });
}
return User;
};