const express = require('express');
const path = require('path'); // Required to resolve paths
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = require('./app'); // Import the app from app.js
const port = 3000;

// Serve static files (e.g., index.html) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Swagger UI for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
}); //worked perfecttly, thanks chat gpt//
