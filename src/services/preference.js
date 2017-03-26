var PreferenceService = {
    // Size
    setSize: function(value) {
        this.size = value;
    },
    getSize: function() {
        return this.size;
    },
    getFontSize: function() {
        return (12 + (this.size * 2));
    },
    // Color
    setContrast: function(highContract) {
        this.isContrast = highContract;
     },
    isHighContrast: function() {
        return this.isContrast;
    },
    // Theme
    setThemes: function(themeIds) {
        this.themes = themeIds;
    },
    getThemes: function() {
        return this.themes;
    }
};

module.exports = PreferenceService;
