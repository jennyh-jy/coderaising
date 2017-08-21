const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongoose-simpledb').Types.ObjectId;

const postSchema = new Schema({
  // _id: Number,
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

// Register the pokemonSchema with Mongoose as the 'Posts' collection.
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
