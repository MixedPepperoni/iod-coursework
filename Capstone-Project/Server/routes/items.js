const express = require('express'); 
const router = express.Router();
const Item = require('../models/Item');

// 🔹 Add a new item (POST first, to avoid catching POST requests in the sessionId route)
router.post('/', async (req, res) => {
  const { name, price, quantity, sessionId } = req.body;

  if (!name || !sessionId) {
    return res.status(400).json({ message: 'Missing required fields: name and sessionId' });
  }

  try {
    const newItem = new Item({ name, price, quantity, sessionId });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ message: 'Error saving item', error });
  }
});

// 🔹 Return all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching all items', error });
  }
});

// 🔹 Return items by sessionId
router.get('/:sessionId', async (req, res) => {
  const { sessionId } = req.params;
  try {
    const items = await Item.find({ sessionId });
    res.json(items);
  } catch (error) {
    console.error('Error fetching items for sessionId:', sessionId, error);
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Delete item error:', error);
    res.status(500).json({ message: 'Error deleting item', error: error.message });
  }
});
router.get('/:sessionId', async (req, res) => {
  const { sessionId } = req.params;
  try {
    const items = await Item.find({ sessionId });
    res.json(items);
  } catch (error) {
    console.error('Error fetching items for sessionId:', sessionId, error); // <-- you have this already, check your server console!
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
});
module.exports = router;

