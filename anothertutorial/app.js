

const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello World");
		res.end();
	}

	if(req.url === "/api/courses") {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
});

server.listen(3000);

console.log("Listening on port 3000...");

// const EventEmitter = require("events");

// const Logger = require("./logger");
// const logger = new Logger();

// // Register a listener
// logger.on("messageLogged", arg => {
// 	console.log("Listener called", arg);
// });
// logger.log("message")

// const fs = require("fs");
// fs.readdir("./", function(err, files) {
// 	if (err) { console.log("Error", err);
// 	} else { console.log("Result", files)}
// });

// const os = require("os");
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

// const logger = require("./logger.js");
// logger.log("message");


// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

/* global objects:
* console.log();
* setTimeout();
* clearTimeout();
* setInterval();
* clearInterval();
*/

// function sayHello(name) {
// 	console.log("Hello " + name);
// }
// sayHello("Magnus");
