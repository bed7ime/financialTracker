const { Sequelize } = require("sequelize");
const dbConfig = require("../configs/db.config");
// console.log(dbConfig);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
  },
});

testConnection = async () => {
  // Design Pattern : Factory method / *** Singleton ***
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
};

testConnection();
module.exports = sequelize;
