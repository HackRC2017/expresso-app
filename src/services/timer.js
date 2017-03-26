var TimerService = {
    start: function() {
        this.start = new Date();
    },
    stop: function() {
        this.stop = new Date();
    },
    getDifference: function() {
        var time = (this.stop.getTime() - this.start.getTime()) / 1000 // In seconds
        return time * 60; // In minutes
    },
    setRemainingTime: function(value) {
        this.remainingTime = value;
    },
    getRemainingTime: function() {
        return this.remainingTime;
    },
    soustract: function(value) {
        this.remainingTime -= value;
    }
};

module.exports = TimerService;
