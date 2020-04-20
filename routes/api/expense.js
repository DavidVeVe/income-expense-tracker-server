const express = require("express");

const expenseData = require("../../mock/expenseData");

module.exports = (app) => {
  const router = express.Router();

  app.use("/api", router);

  router.get("/expense", (req, res, next) => {
    try {
      res.status(200).json({
        data: expenseData,
        message: "Expense data retrived",
      });
    } catch (error) {
      next(error);
    }
  });
};
