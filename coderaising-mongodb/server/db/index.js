const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/coderaising';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
const db = mongoose.connect(mongoUri);

module.exports = db;
