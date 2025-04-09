const express = require('express')
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express()

// map all routes to the express app


app.use("/", express.static("public"));
app.use('/calculator', calculatorRoutes); //issues was it wasnt connected to calculator. it was based on controls and add. not calcualtor.  Test in thunder first
// export the app
module.exports = app;