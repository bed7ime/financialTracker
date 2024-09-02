const financialController = require("../controllers/financial.controller");
const express = require("express");
const router = express.Router();

// Create record
router.post("/", financialController.create);
// Get all records
router.get("/", financialController.getAll);
// Get records by userId
router.get("/users/:userId", financialController.findAllbyUserId);
// Get record by id
router.get("/:id", financialController.getbyId);
// Update record by id
router.put("/:id", financialController.update);
// Delete record by id
router.delete("/:id", financialController.delete);

module.exports = router;
