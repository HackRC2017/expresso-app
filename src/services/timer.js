var TimerService = {
    // Tempo service
    startTempo: function(allocatedTime) {
        this.startTempo = new Date();
        this.allocatedTime = allocatedTime;
    },
    getRemainingTime: function() {
        var currentTime = new Date();
        var usedTime = (currentTime.getTime() - this.startTempo.getTime()) / 1000 // In seconds
        return this.allocatedTime - (usedTime * 60); // In minutes
    },

    // Regular service
    start: function() { this.start = new Date(); },
    stop: function() { this.stop = new Date(); },
    getDifference: function() {
        var time = (this.stop.getTime() - this.start.getTime()) / 1000 // In seconds
        return time * 60; // In minutes
    },


};

module.exports = TimerService;
