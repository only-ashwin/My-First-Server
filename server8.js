// This to connect with the File named "serverContent2.js"
const http = require("http");
const serverContent = require("./serverContent2");
const server = http.createServer(serverContent.handler);
console.log(serverContent.data);

server.listen(3000);