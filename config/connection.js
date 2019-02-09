// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("searchresults", "root", "root", {
  host: "localhost",
  port: 8889,
  dialect: "mysql"
});

// Exports the connection for other files to use
module.exports = sequelize;          