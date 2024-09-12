const express = require("express");
const app = express();
const financialRouter = require("./routers/financial.router");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const corsOptions = {
  origin: process.env.origin,
};

// use Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Financial Tracker API</h1>");
});

// use Router
app.use("/api/v1/financials", financialRouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
