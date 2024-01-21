const User = require('../models/userModel.js')
const Post = require('../models/postModel.js')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const clientPromise = require('../lib/mongodb.js')

async function createPost(userId, imageLink, caption) {
  try {
    const client = await clientPromise
    const db = client.db()
    const newPost = new Post({imageLink, caption})
    await newPost.save()

    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }

    newPost.nextPost = user.headPost
    await newPost.save()

    user.headPost = newPost._id
    await user.save()

    return newPost
  } catch (error) {
    console.error('Error creating post for user: ', error)
    throw error
  }
}

async function getPosts(userId) {
  try {
    const client = await clientPromise
    const db = client.db()
    const user = await User.findById(userId)

    let posts = []
    let currentPostId = user.headPost
    while (currentPostId) {
      const post = await Post.findById(currentPostId)
      if (!post) break

      posts.push(post)
      currentPostId = post.nextPost
    }

    return posts
  } catch (error) {
    console.error('Error retrieving posts: ', error)
    throw error
  }
}

module.exports = {
  createPost,
  getPosts,
}
