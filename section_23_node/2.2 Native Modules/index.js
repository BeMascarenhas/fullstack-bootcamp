const fs = require("fs");

fs.writeFile("message.txt","Hello from Node Js", (err) => {
    if(err) throw err;
    console.log("File has been written");
});

fs.readFile("message.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
});