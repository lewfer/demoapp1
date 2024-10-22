var http = require("http"); 
const port = 8000;  

http.createServer(function(req, res) { 
    if (req.url=="/about"){
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("<h1>About!</h1>");
    }
    else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello World Again!");
    }
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
