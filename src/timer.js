(function() {
    var Timer = function() {
    	/**
    	 * @description First moment
    	 */
        this.first = new Date();
        /**
         * @description Resets the first moment
         */
        this.reset = function() {
            this.first = new Date();
        }
        /**
         * @description Calculates the miliseconds from the first moment until now
         */
        this.time = function() {
            return (new Date()).getTime() - this.first.getTime();
        };
        return this;
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = Timer;
    } else {
        window.Timer = Timer;
    }
})();