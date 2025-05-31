const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  sessionId: { type: String, required: true },
  quantity: { type: Number, default: 1 }, // Adds quantity. aka changel amoutn x1,x2,x3 etc.
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
