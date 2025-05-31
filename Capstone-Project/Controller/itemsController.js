// controllers/ItemsController.js
const Item = require('../models/Item');

exports.getItemsBySession = async (req, res) => {
  try {
    const items = await Item.find({ sessionId: req.params.sessionId });
    res.json(items);
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createItem = async (req, res) => {
  try {
    const { name, price, sessionId, quantity } = req.body;
    if (!name || price == null || !sessionId) {
      return res.status(400).json({ error: 'Missing name, price, or sessionId' });
    }
    const newItem = new Item({ name, price, sessionId, quantity: quantity || 1 });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error('Error creating item:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Add delete and patch controllers similarly
