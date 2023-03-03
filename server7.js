// This to connect with the File named "serverContent1.js"
const http = require("http");
const serverContent = require("./serverContent1");
const server = http.createServer(serverContent.handler);
console.log(serverContent.data);

server.listen(3000);