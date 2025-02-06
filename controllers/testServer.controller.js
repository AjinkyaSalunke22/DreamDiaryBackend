const { standardResponse } = require("../utils/standardResponse.util");

const testServerController = (req, res) => {
  const fullUrl = req.protocol + "://" + req.get("host");
  standardResponse(res, 200, `Server is running on ${fullUrl}`);
};

module.exports = { testServerController };
