const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("✅ MongoDB connection established successfully");
});

// ✅ Import Routes
const usersRoute = require("./routes/users");
const binRequestsRoute = require("./routes/binRequestRoutes");
const ultrasonicBinRoutes = require("./routes/ultrasonicBinRoutes");
const contactRoutes = require("./routes/contactUsroute");

// ✅ Use Routes
app.use("/users", usersRoute);
app.use("/requests", binRequestsRoute);
app.use("/api/ultrasonic-bin", ultrasonicBinRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
});
