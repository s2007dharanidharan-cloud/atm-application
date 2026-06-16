const mongoose = require("mongoose");

// This is the blueprint for every ATM account saved in MongoDB
const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true // Prevents two people from having the same account number
  },
  pin: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0 // Every new user starts with 0 rupees
  }
});

// Export it so our server can use it
module.exports = mongoose.model("Account", accountSchema);