const http = require("http");
const fs = require("fs");
const myServer = http.createServer( (req, res) => {
    // console.log("New Request recieved");
    // console.log(req)
    const log = `${Date.now()}: New Req Recieved at path ${req.url}\n`
    
    fs.appendFile('log.txt', log, (err, data) => {
        switch(req.url){
            case '/': res.end("HomePage");
            break
            case '/about': res.end("I am Abhishek Bhattarai");
            break
            default: res.end(" 404 not found")
        }
    });
   
});

myServer.listen(8000, () => console.log("Server Started!"))
console.log("server is on http://localhost:8000")