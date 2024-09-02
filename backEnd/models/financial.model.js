const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Financial = sequelize.define("financial", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Financial.sync({ force: true })
  .then(() => {
    console.log("Created a table or already have one?");
  })
  .catch((error) => {
    console.log("An error occurred creating the table : ", error);
  });

module.exports = Financial;
