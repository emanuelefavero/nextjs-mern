const express = require('express')
const router = express.Router()

// Controllers
const postController = require('./controllers/PostsController')

router.get('/posts', postController.getPosts)
router.get('/posts/:id', postController.getPost)

module.exports = router
