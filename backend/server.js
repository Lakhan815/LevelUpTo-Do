require("dotenv").config(); // calls .env file
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

// starts express and uses json format
const app = express();
app.use(express.json());

//grabs all routes and attaches it to express
app.use("/api/Users", userRoutes);
app.use("/api/Tasks", taskRoutes);

// connects to db with mongoose to enforce schema
mongoose
  .connect(process.env.MONGO_URI, { dbName: "TODODB" })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to database and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
