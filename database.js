const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to DB");
  } catch (error) {
    console.log("ERROR cant connect", error);
  }
};

module.exports = connectDB;
