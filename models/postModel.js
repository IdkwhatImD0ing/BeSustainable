const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  imageLink: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  nextPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    default: null,
  },
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)
module.exports = Post
