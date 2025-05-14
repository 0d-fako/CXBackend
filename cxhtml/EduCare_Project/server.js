const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

mongooose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const eduCareRoutes = require("./routes/eduCareRoutes");
app.use("/api/eduCare", eduCareRoutes);