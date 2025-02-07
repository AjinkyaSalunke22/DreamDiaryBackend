require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB.config");
const morganMiddleware = require("./middleware/logger.middleware");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
morganMiddleware(app);

const testServerRoute = require("./routes/testServer.route");
const userRoute = require("./routes/user.route");

app.use("/api/v1", testServerRoute);
app.use("/api/v1", userRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
