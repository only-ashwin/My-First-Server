// This to connect with the File named "serverContent.js"
const http = require("http");
const serverContent = require("./serverContent");
const server = http.createServer(serverContent);

server.listen(3000);

