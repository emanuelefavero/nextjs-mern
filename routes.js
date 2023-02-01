const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
  res.json({ title: 'Post Title', content: 'Post Content' })
})

module.exports = router
