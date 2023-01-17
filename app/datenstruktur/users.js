const Sequelize = require('sequelize');
const database = require('../util/database');

const Users = database.define('Benutzer',{
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
 Password: {
type: Sequelize.STRING,
allowNull: false,
}

});



module.exports = Users;