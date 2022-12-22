const Sequelize = require('sequelize');
const db = require('../util/database');

const Users = db.define('User',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
username: { 
    type: Sequelize.STRING,
    allowNull: false,
},
email:{
    type: Sequelize.STRING,
    allowNull: false,
},
telefonnummer: {
  type: Sequelize.INTEGER,
  allowNull: false
},
 Password: {
type: Sequelize.STRING,
allowNull: false,
}

});



module.exports = Users;