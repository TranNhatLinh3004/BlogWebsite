//---- step : 1.1
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const connectDB = require("./database.config");
const authRoute = require("./routes/auth");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/auth", authRoute);
connectDB();

//---- step : 3
const path = require("path");
app.listen(5000, () => {
    console.log("backed running");
});