var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:password@localhost:5432/freedayDB');


module.exports = sequelize;