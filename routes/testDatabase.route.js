const express = require("express");
const router = express.Router();
const {
  testDatabaseController,
} = require("../controllers/testDatabase.controller");

router.get("/test-database", testDatabaseController);

module.exports = router;
