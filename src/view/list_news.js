import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider, Button } from 'react-native';
import {Actions} from "react-native-router-flux";


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
class ListNewsView extends Component {
    render() {
        return (
            <View style={styles.container}>

                    <Button title="News 1" onPress={() => Actions.news({news: {title: 'News 1', description: 'Text'}})} />

                <Text style={styles.welcome}>
                    News 2
                </Text>
                <Text style={styles.welcome}>
                    News 3
                </Text>
            </View>
        );
    }
}

module.exports = ListNewsView;
