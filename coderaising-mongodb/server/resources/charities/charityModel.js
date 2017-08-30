const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  content: String,
  balance: {
    type: Number,
    default: 0,
  }
}, {collection: 'charities'});

const Charity = mongoose.model('Charity', charitySchema);
module.exports = Charity;
