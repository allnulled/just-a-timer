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