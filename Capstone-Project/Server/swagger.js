const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LunchBreak API",
      version: "1.0.0",
      description: "API documentation for LunchBreak",
    },
    components: {
      schemas: {
        Item: {
          type: "object",
          required: ["name", "sessionId"],
          properties: {
            _id: { type: "string", description: "Item ID" },
            name: { type: "string" },
            price: { type: "number" },
            quantity: { type: "number" },
            sessionId: { type: "string" },
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, "routes/*.js")], // swagger looks for JSDoc 
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
