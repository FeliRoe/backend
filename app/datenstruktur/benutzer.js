const Sequelize = require('sequelize');
const database = require('../util/database');


//Alles bitte ändern zu gleich


const benutzer = database.define('Benutzer',{
  BenutzerID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
Benutzername: { 
    type: Sequelize.STRING,
    allowNull: false,
},
Email:{
    type: Sequelize.STRING,
    allowNull: false,
},
 Passwort: {
type: Sequelize.STRING,
allowNull: false,
}

});



module.exports = Benutzer;