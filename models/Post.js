const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },

  // * TIP: To Add a user reference, and a timestamp:
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Post', PostSchema)
