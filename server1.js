const  http = require("http");

const server = http.createServer((req,res) => {
    console.log(req, "URL:", req.url, "Method:", req.method, "Header:", req.headers);
});

server.listen(3000);