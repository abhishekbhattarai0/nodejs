const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer( (req, res) => {
    // console.log("New Request recieved");
    if (req.url === '/favicon.ico') return res.end();
    // console.log(req)
    const log = `${Date.now()}: New Req Recieved at path ${req.url}\n`


    const myUrl = url.parse(req.url, true);
    console.log(myUrl)

    
    fs.appendFile('log.txt', log, (err, data) => {
        
        switch(myUrl.pathname){
            case '/': res.end("HomePage");
            break
             case '/about':
             const username = myUrl.query.name;   
             res.end(`Hi , ${username || `user`} `);
            break

            case '/search':
                const search = myUrl.query.search_query;
                res.end("here are the search result for " + search);
                break
            default: res.end(" 404 not found")
        }
    });
   
});

myServer.listen(8000, () => console.log("Server Started!"))
console.log("server is on http://localhost:8000")