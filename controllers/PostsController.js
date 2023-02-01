const Post = require('../models/Post')

// Get all posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find()
  res.json(posts)
}

// Get a single post by id
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.json(post)
}

//
//
//
//
//
//
//
//
//
//
//

// * TIP: Add .populate('user') to add a reference to the User model
// const post = await Post.findById(req.params.id).populate('user')
/*
The Post model has a reference to an User model stored as the `user` field. The .populate method replaces the `user` reference with the actual User model
NOTE: The user model needs to be created first
*/
