const Sequelize = require('sequelize');
const database = require('../util/database');

//Alles bitte ändern -> zu gleich

const Interessenten = database.define('Interessenten',{
ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
BenutzerID: {
    type: Sequelize.INTEGER,
    allowNull: true
},
InseratID: {
    type: Sequelize.INTEGER,
    allowNull: true
}
});


module.exports = Interessenten;