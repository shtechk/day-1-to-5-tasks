const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 100 },
  image: String,
});
// here i'd change "image" to "civilId" if uploading an array

module.exports = mongoose.model("product", productSchema);
