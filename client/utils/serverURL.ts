const dev = process.env.NODE_ENV !== 'production'

// TODO - change this to your deployed server URL
export const serverURL = dev
  ? 'http://localhost:4000'
  : 'YOUR_DEPLOYED_SERVER_URL_HERE'
