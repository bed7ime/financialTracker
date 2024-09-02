const Financial = require("../models/financial.model");

exports.create = async (req, res) => {
  const { userId, description, date, amount, category, paymentMethod } =
    req.body;
  const newFinanceRecord = {
    userId: userId,
    description: description,
    date: date,
    amount: amount,
    category: category,
    paymentMethod: paymentMethod,
  };
  await Financial.create(newFinanceRecord)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "An error occurred while saving a new record.",
      });
    });
};
