const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const incomeRoute = require("./routes/api/income");
const expenseRoute = require("./routes/api/expense");

const PORT = 3005;

app.use(bodyParser.json());

incomeRoute(app);
expenseRoute(app);

app.listen(PORT, () => {
  console.log("server running on port: ", PORT);
});
