const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  number: {
    type: Number,
    unique: true,
  },
  username: String,
  title: {
    type: String,
    unique: true,
  },
  content: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
