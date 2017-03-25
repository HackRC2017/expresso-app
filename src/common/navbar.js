import React, { Component } from 'react';
import { Animated, Text, View, Button, StyleSheet } from 'react-native';
import { NavBar } from 'react-native-router-flux';

class AppNavBar extends NavBar {
    static contextTypes = {
        drawer: React.PropTypes.object
    };
    _renderLeftButton() {
        return (
            <TouchableOpacity onPress={this.context.drawer.open}>
                <Text>Test</Text>
            </TouchableOpacity>
        );
    }
}

module.exports = AppNavBar;
