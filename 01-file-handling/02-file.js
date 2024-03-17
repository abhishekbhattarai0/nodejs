const fs = require("fs");
const os = require("os")
// Blocking...
// console.log("1")
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result)
// console.log("2")


//Non - Blocking
// console.log("1");
// fs.readFile("contact.txt", "utf-8", (err, result) => {
//     console.log(result);
// });
// console.log("2")
// console.log("3")
// console.log("4")




// Default Thread pool size = 4
// if we have 8 core processor then we can make max thread 8.
// it means no of cores = max thread you can make

console.log("CPU cores : ",os.cpus().length)
console.log("CPU cores : ",os.cpus())