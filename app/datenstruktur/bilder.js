const database = require('../util/database');
const DataTypes = require('sequelize');

const bilder = database.define('bild', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true
  }
});

module.exports = bilder;
