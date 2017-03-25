import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider } from 'react-native';
import Interactable from 'react-native-interactable';


// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
        paddingBottom: 10
    },
    description: {
        fontSize: 14,
        color: '#FFFFFF'
    }
});

// View
class NewsDescription extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.news.title}</Text>
                <Text>{this.props.news.description}</Text>
            </View>
        );
    }
}

module.exports = NewsDescription;
