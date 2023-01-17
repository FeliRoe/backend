const Sequelize = require('sequelize');
const database = require('../util/database');
//const database = db;


const Intressenten = database.define('Interessenten',{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
userId: {
    type: Sequelize.INTEGER,
    allowNull: true
},
inseratId: {
    type: Sequelize.INTEGER,
    allowNull: true
}
});


module.exports = Intressenten;