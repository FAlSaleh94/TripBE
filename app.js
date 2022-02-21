const express = require("express");
const tripRoutes = require("./products/routes");
const connectDB = require("./db/database");

const app = express();
const PORT = 8090;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// Router
app.use("/api/trips", tripRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Path Not Found" });
});
app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ message: error.message || "Internal Server Error" });
});

connectDB();
app.listen(PORT, () => {
  console.log("this app is running");
});
