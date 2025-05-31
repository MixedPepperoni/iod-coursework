const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); //swagger.js?
const itemsRoutes = require("./routes/items");

const app = express();

// our Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/lunchbreak")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Swagger UI. Mean it right i think
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check 
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", mongodb: mongoose.connection.readyState });
});

// API-Routes
app.use("/api/items", itemsRoutes);

// the Root endpoints? Check to ensure working
app.get("/", (req, res) => {
  res.send("API is running");
});

// swagger.json
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// Start server with this
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
