import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
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
class LandingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 10
        };
    }
    onTimeChange(value) {

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Salut, combien as-tu de temps pour lire les news?
                </Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={60}
                    step={1}
                    value={this.state.time}
                    onValueChange={(value) => {this.setState({time: value});}} />
                <Text style={styles.welcome}>
                    {this.state.time} minutes
                </Text>
            </View>
        );
    }
}

module.exports = LandingView;
