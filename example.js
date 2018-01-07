var Timer = require("./src/timer.js");
var timer = new Timer();
console.log("Time: " + timer.time());
console.log("Time: " + timer.time());
console.log("Time: " + timer.time());
console.log("Time: " + timer.time());
console.log("Time: " + timer.time());
console.log("Time: " + timer.time());
console.log("Time: " + timer.time());
console.log("Time: " + timer.time());
console.log("Time: " + timer.time());
setTimeout(function() {
	console.log("Execution at milisecond number " + timer.time());
}, 2000);