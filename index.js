const express = require("express");
const app = express();

const { config } = require("./config/index");
const carsApi = require("./routes/cars");

carsApi(app);

app.listen(config.port, () =>
  console.log("Server listening on port, " + config.port)
);
