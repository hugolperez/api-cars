require("dotenv").config();

const config = {
  port: process.env.PORT || 80
}

module.exports = { config };