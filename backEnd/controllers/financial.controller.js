const { where } = require("sequelize");
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

exports.getAll = async (req, res) => {
  await Financial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "An error occurred while loading financial records.",
      });
    });
};

exports.findAllbyUserId = async (req, res) => {
  const userId = req.params.userId;

  await Financial.findAll({ where: { userId: userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "An error occurred while loading financial records.",
      });
    });
};

exports.getbyId = async (req, res) => {
  const id = req.params.id;

  await Financial.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "An error occurred while loading financial records.",
      });
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;

  await Financial.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Financial update successful." });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "An error occurred while updating financial Id: " + id + ".",
      });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  await Financial.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Financial delete successful." });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "An error occurred while deleting financial Id: " + id + ".",
      });
    });
};
