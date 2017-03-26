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
    // Theme
    setThemes: function(themeIds) {
        this.theme = themeIds;
    },
    getThemes: function() {
        return this.themes;
    }
};

module.exports = PreferenceService;
