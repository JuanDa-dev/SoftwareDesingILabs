var http = require("http");
const add = require("./sumModule");
const myDateTime = require("./myfirstmodule")

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end(); 
    const result = add(2, 3);
    console.log(result); // Output: 5
  })
  .listen(8080);
