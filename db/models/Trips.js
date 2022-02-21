const mongoose = require("mongoose");

const TripsSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
});

module.exports = mongoose.model("Trips", TripsSchema);
