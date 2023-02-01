# Next.js MERN

This is a boilerplate for a full-stack MERN application using Next.js, Express, and MongoDB.

## Getting Started Locally

- Clone the repo
- Install dependencies with `npm install` in the root directory and the `client` directory
- Create a `.env` file in the root directory and add the following:

```env
MONGODB_URI='YOUR MONGODB URI'
PORT=4000
NODE_ENV='development'
```

> Personal Note: I use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) with /blogDB as my database name in this project

- Run `npm run dev` to start the development server

## Local ports

- The backend runs on [http://localhost:4000](http://localhost:4000)
- The client runs on [http://localhost:3000](http://localhost:3000)

## Deployment

- the client and server should be deployed separately
- update `clientURL.js` file with the correct URL for the client
- update `serverURL.ts` file with the correct URL for the server

## License

- [MIT](LICENSE.md)
