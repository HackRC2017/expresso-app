import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    slider: {
        width: 300,
        height: 10
    }
});

// View
class NewsView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.news.title}</Text>
                <Text>{this.props.news.description}</Text>
            </View>
        );
    }
}

module.exports = NewsView;
