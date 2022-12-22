const Sequelize = require('sequelize');
const db = require('../util/database');

const Intressenten = db.define('intressentenInserat',{
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