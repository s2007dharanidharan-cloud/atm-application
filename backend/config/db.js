const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Modern Mongoose does not need useNewUrlParser or useUnifiedTopology!
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000 // Stops infinite freezing if network drops
    });
    console.log("MongoDB Database Connected Successfully!");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;