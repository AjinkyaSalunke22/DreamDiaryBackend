const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const createLogDirectory = (logDir) => {
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
};

const morganMiddleware = (app) => {
  const logDir = path.join(__dirname, "../logs");
  createLogDirectory(logDir);

  const logStream = fs.createWriteStream(path.join(logDir, "requests.log"), {
    flags: "a",
  });

  app.use(morgan("combined", { stream: logStream }));
};

module.exports = morganMiddleware;
