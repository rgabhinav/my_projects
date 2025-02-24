require('dotenv').config(); // Load environment variables
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

// Debugging line to check the value of MONGODB_URI
console.log('MONGODB_URI:', uri);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to the database"))
  .catch((err) => console.error("Error connecting to the database", err));

module.exports = mongoose.connection;
