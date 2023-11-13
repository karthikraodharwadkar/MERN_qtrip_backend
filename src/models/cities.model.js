const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  id: { type: String, required: true, trim: true},
  city: { type: String, required: true, trim: true},
  description: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
});

const CityModel = mongoose.model("Cities", citySchema);

module.exports = CityModel;
