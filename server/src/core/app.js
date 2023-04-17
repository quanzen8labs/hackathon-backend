const express = require("express");
const cors = require("cors");

const app = express();

// const ExpressPinoLogger = require("express-pino-logger");
app.use(cors());
app.use(express.json());
// app.use(ExpressPinoLogger);

module.exports = app;
