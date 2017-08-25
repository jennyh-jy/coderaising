const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  number: {
    type: Number,
    unique: true,
  },
  local: {
    email: {
      type: String,
      unique: true,
    },
    password: String,
  },
  google: {
    id: {
      type: String,
      unique: true,
    },
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
