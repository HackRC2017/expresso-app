var TimerService = {
    start: function() {
        this.start = new Date();
    },
    stop: function() {
        this.stop = new Date();
    },
    getDifference: function() {
        var time = (this.stop.getTime() - this.start.getTime()) / 1000
        return time;
    },
    setRemainingTime: function(value) {
        this.remainingTime = value;
    },
    getRemainingTime: function() {
        return this.remainingTime;
    }
};

module.exports = TimerService;
