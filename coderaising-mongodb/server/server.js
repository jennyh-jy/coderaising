const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const db = require('./db');
const router = require('./resources/router.js');

// Create the Express application:
const app = express();

// Attach middleware:
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react-client/dist'))) ;

// Import the mainRouter and assign it to the correct route:
app.use('/', router);

module.exports = app;
