const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
const Address = sequelize.define('Address',{
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  temporaryAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  permanentAddress:{
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  permanentHouseNumber:{
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  }
});

Address.associate = (models) => {
  Address.hasOne(models.User,{ onDelete: 'cascade',hooks:true});
};

return Address;

};