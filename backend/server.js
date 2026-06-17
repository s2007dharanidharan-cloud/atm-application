const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const atmController = require("./controllers/atmController");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ATM Routes
app.post("/api/atm/signup", atmController.signup);
app.post("/api/atm/login", atmController.login);
app.get("/api/atm/balance/:accountNumber", atmController.checkBalance);
app.put("/api/atm/deposit", atmController.deposit);
app.put("/api/atm/withdraw", atmController.withdraw);

// Test Route
app.get("/", (req, res) => {
  res.send("ATM Backend Running perfectly on Port 5001");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});