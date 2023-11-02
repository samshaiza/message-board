const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");

const messageRoutes = require("./routes/messages");
const userRoutes = require("./routes/user");

// middleware

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes

app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to the db");
    app.listen(process.env.PORT, () => {
      console.log("listening to port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
