const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/tasks", taskRoute);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to MondoDb and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
