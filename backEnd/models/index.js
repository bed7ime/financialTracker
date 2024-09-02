const Sequelize = require("sequelize");
const sequelize = require("./db");
const Financial = require("./financial.model");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Financial = Financial;
module.exports = db;
