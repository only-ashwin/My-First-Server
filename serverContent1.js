const http = require("http");
const fs = require("fs");

const requestHandler = ((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write('<body><form action = "/file" method = "POST" name = "msg" ><input type = "text" name = "msg"><button type="submit">Submit</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if(url === "/file" && method === "POST"){
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        return req.on("end", () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("NewFile.txt", message);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        })
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Second Page</title></head>");
    res.write("<body><h1>My Second Page</h1></body>");
    res.write("</html>");
    res.end();
});


// for exporting more the one module we can pass it in for of objects
module.exports = {
    handler : requestHandler,
    data : "Hello Friends"
};