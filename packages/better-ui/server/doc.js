const server = require("pushstate-server");
const path = require("path");
const directory = path.join(__dirname, "../docs/.vitepress/dist");
server.start({
  port: 5000,
  directory: directory,
});

console.log("your server is running at http://localhost:5000");
