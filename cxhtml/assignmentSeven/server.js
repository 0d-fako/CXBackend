const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


const itemRoutes = require("./api/ItemController");


app.use("/items", itemRoutes);
app.listen(5000, () => console.log("Server running on port 5000"));
