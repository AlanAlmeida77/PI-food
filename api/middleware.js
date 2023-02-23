const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

function addApiKeyToRequests(app) {
  app.use((req, res, next) => {
    req.apiKey = process.env.API_KEY;
    next();
  });
}

module.exports = addApiKeyToRequests;