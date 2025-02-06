require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB.config");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

const testServerRoute = require("./routes/testServer.route");

app.use("/api/v1", testServerRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
