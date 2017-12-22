var Timer = function() {
	this.first = new Date();
	this.reset = function() {
		this.first = new Date();
	}
	this.time = function() {
		return (new Date()).getTime() - this.first.getTime();
	};
	return this;
};
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