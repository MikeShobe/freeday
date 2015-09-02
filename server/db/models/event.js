
var Sequelize = require('sequelize');
var database = require('../connection.js');


var Event = database.define('event',{

  title:{
    type:Sequelize.STRING,
    field:'title'
  },
  category:{
    type:Sequelize.STRING,
    field:'category'
  },
  time:{
    type:Sequelize.STRING,
    field:'time'
  },
  description:{
    type:Sequelize.STRING,
    field:'description'
  },
  location:{
    type:Sequelize.STRING,
    field:'location'
  },
  tags:{
    type: Sequelize.ARRAY(Sequelize.STRING),
    field:'tags'
  }


});
module.exports = Event;