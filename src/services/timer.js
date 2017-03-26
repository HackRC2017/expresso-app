var TimerService = {
    // Tempo service
    startTempo: function(allocatedTime) {
        this.startTimeTempo = new Date();
        this.allocatedTime = allocatedTime;
    },
    getRemainingTime: function() {
        var currentTime = new Date();
        var usedTime = (currentTime.getTime() - this.startTimeTempo.getTime()) / 60000 // In seconds /1000 In minutes /60
        return this.allocatedTime - Math.round(usedTime); //
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
