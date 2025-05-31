const mongoose = require("mongoose");
const Item = require("./models/Item");

mongoose
  .connect("mongodb://127.0.0.1:27017/lunchbreak")
  .then(async () => {
    console.log("Connected to MongoDB for seeding");

    const sessionId = "default-session";

    const baseRows = [
      { name: "Apples", price: 1.6, sessionId, quantity: 1 },
      { name: "Bananas", price: 0.6, sessionId, quantity: 1 },
      { name: "Grapes", price: 2.4, sessionId, quantity: 1 },
      { name: "Lemons", price: 2.0, sessionId, quantity: 1 },
      { name: "Oranges", price: 1.4, sessionId, quantity: 1 },
      { name: "80/20 Ground Beef", price: 4.5, sessionId, quantity: 1 },
      { name: "Chicken Thighs", price: 2.5, sessionId, quantity: 1 },
      { name: "Pork Ribs", price: 3.5, sessionId, quantity: 1 },
      { name: "Chicken Breast", price: 4.0, sessionId, quantity: 1 },
      { name: "Pork Chops", price: 4.0, sessionId, quantity: 1 },
      { name: "Pork Loin", price: 3.5, sessionId, quantity: 1 },
      { name: "1 dozen eggs", price: 2.0, sessionId, quantity: 1 },
      { name: "Cheddar Cheese", price: 5.0, sessionId, quantity: 1 },
      { name: "Flour", price: 0.5, sessionId, quantity: 1 },
      { name: "White Bread", price: 1.5, sessionId, quantity: 1 },
      { name: "Potatoes", price: 1.0, sessionId, quantity: 1 },
    ];

    try {
      const deleted = await Item.deleteMany({ sessionId });
      console.log(
        `Deleted ${deleted.deletedCount} existing items for sessionId: ${sessionId}`
      );
      const inserted = await Item.insertMany(baseRows);
      console.log(
        `Inserted ${inserted.length} items for sessionId: ${sessionId}`
      );
      console.log("Sample item:", inserted[0]);
    } catch (err) {
      console.error("Seeding error:", err.message, err.stack);
    } finally {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    }
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message, err.stack);
    mongoose.disconnect();
  });
