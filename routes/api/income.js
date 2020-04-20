const express = require("express");

const incomeData = require("../../mock/incomeData");

module.exports = (app) => {
  const router = express.Router();

  app.use("/api", router);

  router.get("/income", (req, res, next) => {
    try {
      res.status(200).json({
        data: incomeData,
        message: "Income data retrived",
      });
    } catch (error) {
      next(error);
    }
  });
};
