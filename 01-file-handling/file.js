const fs = require("fs");
//sync..call
fs.writeFileSync('./test.txt', 'Hello theref');

// //Async
fs.writeFile("./test.txt", "Hello world async", (err)=> {});

