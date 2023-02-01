const dev = process.env.NODE_ENV !== 'production'

// TODO - change this to your deployed client URL
module.exports.serverURL = dev
  ? 'http://localhost:3000'
  : 'YOUR CLIENT URL HERE'
