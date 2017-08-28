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
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
