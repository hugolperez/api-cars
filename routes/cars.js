const express = require("express")
const { carsMocks } = require("../utils/mocks/cars");

function carsApi(app) {
  const router = express.Router();
  app.use("/api/cars", router);

  router.get("/", async function(req, res, next) {
    try {
      const cars = await Promise.resolve(carsMocks);

      res.status(200).json({
        data: cars,
        message: 'cars listed'
      })
    } catch (error) {
      next(error);
    }
  })
}

module.exports = carsApi;