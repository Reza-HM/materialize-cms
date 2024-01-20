// server.js

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();
// Your middleware

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
