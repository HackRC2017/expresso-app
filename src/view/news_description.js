import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider } from 'react-native';
import HTMLView from 'react-native-htmlview';


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
        var htmlContent = '<p><a href="http://jsdf.co">&hearts; nice job!</a></p>'
        return (
            <View style={styles.container}>
                <Text>{this.props.news.title}</Text>
                <HTMLView value={htmlContent} />
            </View>
        );
    }
}

module.exports = NewsDescription;
