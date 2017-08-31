const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  number: {
    type: Number,
    unique: true,
  },
  username: String,
  email: String,
  title: String,
  categories: String,
  content: String,
  limit: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
