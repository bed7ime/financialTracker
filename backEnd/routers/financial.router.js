const financialController = require("../controllers/financial.controller");
const express = require("express");
const router = express.Router();

router.post("/", financialController.create);

module.exports = router;
