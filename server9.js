// This is to connect with the File named "serverContent3.js"
const http = require("http");
const serverContent = require("./serverContent3");
const server = http.createServer(serverContent.handler);
console.log(serverContent.data);

server.listen(3000);