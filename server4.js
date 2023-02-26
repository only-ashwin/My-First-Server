const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>My First Page</h1></body>");
        res.write("</html>");
        return res.end();
    }
    if(url === "/file"){
        fs.writeFileSync("NewFile.txt", "Helloooooo Friends");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Second Page</title></head>");
    res.write("<body><h1>My Second Page</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);