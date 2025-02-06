const express = require("express");
const {
  testServerController,
} = require("../controllers/testServer.controller");

const router = express.Router();

router.get("/test-server", testServerController);

module.exports = router;
