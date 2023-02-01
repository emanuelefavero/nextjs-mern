require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const { clientURL } = require('./config')

const app = express()

// Mongoose
mongoose.set('strictQuery', false)
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to MongoDB')
)

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: clientURL,
    // credentials: true, // use this to enable cookies
  })
)

// Routes
app.use('/api', routes)

// Start server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
