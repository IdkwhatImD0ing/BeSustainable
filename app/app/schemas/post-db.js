const User = require('../schemas/userModel.js')
const Post = require('../schemas/postModel.js');

async function createPost(userId, imageLink, caption) {
  try {
    const newPost = new Post({imageLink, caption});
    await newPost.save();

    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    newPost.nextPost = user.headPost;
    await newPost.save();

    user.headPost = newPost._id;
    await user.save();

    return newPost;
  } catch (error) {
    console.error('Error creating post for user: ', error);
    throw error;
  }
}

async function getPosts(userId) {
  try {
    const user = await User.findById(userId);
    if (!user || !user.headPost) {
      throw new Error("User not found");
    }

    let posts = [];
    let currentPostId = user.headPost;
    while (currentPostId) {
      const post = await Post.findById(currentPostId);
      if (!post)
        break;

      posts.push(post);
      currentPostId = post.nextPost;
    }

    return posts;
  } catch (error) {
    consoler.error('Error retrieving posts: ', error);
    throw error;
  }
}

module.exports = {
  createPost,
  getPosts
};
