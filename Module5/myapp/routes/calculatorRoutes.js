const express = require("express");
const router = express.Router();

// Import the controller. My code was cluttered and thugh commented ouut it referencce the commented ot. Breaking file.
const calculatorController = require("../controllers/calculatorController");// Clean and refrences the conroller.js file.

// Define routes. All routes defined and connected to calculatorController.js programs of each.
router.get("/add", calculatorController.addController);
router.get("/sub", calculatorController.subController);
router.get("/divide", calculatorController.divideController);
router.get("/multiply", calculatorController.multiplyController);

module.exports = router;
