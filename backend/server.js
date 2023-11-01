const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");

const messageRoutes = require("./routes/messages");

// middleware

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/messages", messageRoutes);

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
