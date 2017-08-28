const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  google: {
    id: String,
    token: String,
    name: String,
    email: String,
    imageUrl: String,
  },
  balance: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
