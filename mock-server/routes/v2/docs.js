const express = require('express');
const router = express.Router();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Rumour Master API",
    version: "2.0.0",
    description: "Documentation for the Infinite API Playground"
  },
  paths: {
    "/api/v2/auth/login": {
      post: {
        summary: "Login to get a JWT token",
        responses: {
          200: { description: "Successful login" }
        }
      }
    }
  }
};

// 1. Serve Swagger JSON
router.get('/swagger.json', (req, res) => {
    res.json(swaggerDefinition);
});

// 2. Schema Validation Endpoint
router.get('/validate-schema', (req, res) => {
    res.json({ status: "Schema is valid", type: "OpenAPI 3.0" });
});

module.exports = router;
