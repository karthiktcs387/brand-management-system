const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ must be here
require("dotenv").config();

const brandRoutes = require("./routes/brandRoutes");

const app = express();

// ✅ THIS MUST BE BEFORE ROUTES
app.use(cors());

app.use(express.json());

app.use("/api", brandRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});