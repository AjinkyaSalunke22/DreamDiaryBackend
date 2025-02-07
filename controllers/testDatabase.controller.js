const { standardResponse } = require("../utils/standardResponse.util");
const { standardError } = require("../utils/standardError.util");
const {
  testDBConnectionService,
} = require("../services/testDBConnection.service");

const testDatabaseController = async (req, res) => {
  try {
    const result = await testDBConnectionService();
    if (result) {
      standardResponse(res, 200, "Database connection successful");
    } else {
      standardError(
        res,
        new Error("Database connection failed"),
        "Database connection failed"
      );
    }
  } catch (error) {
    standardError(res, error, "Database connection failed");
  }
};

module.exports = { testDatabaseController };
