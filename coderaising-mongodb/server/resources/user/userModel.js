const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Login 기능 구현하고 User로 바꾸기
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
