const server = require("pushstate-server");
const path = require("path");
const directory = path.join(__dirname, "../dist");
server.start({
  port: 6000,
  directory: directory,
});

console.log("your server is running at http://localhost:6000");
