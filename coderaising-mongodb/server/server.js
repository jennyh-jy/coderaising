const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./db');
// const router = require('./resources/pokemon/pokemonRouter.js');

// Create the Express application:
const app = express();

// Attach middleware:
app.use(cors());
app.use(bodyParser.json());

// Import the pokemonRouter and assign it to the correct route:
// app.use('/api/pokemon', router);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CodeRaising-MongoDB RESTful API!' });
});

module.exports = app;
