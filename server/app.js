const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({
    path: path.join(__dirname, ".env")
});

const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// AI Routes
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
    res.send("CareerCompass AI Backend is Running");
});

module.exports = app;