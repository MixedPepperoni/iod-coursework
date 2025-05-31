const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  sessionId: { type: String, required: true },
  quantity: { type: Number, default: 1 }, // Added quantity
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;