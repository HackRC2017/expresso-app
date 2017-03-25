// Lib imports
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider, Button } from 'react-native';
import {Actions} from "react-native-router-flux";

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#FFFFFF'
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
    },
    iconHeader: {
        marginTop: 80,
        width: 300,
        height: 40
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
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
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.iconHeader} source={require('../resources/logo_rc_header.png')} />
                <Text style={styles.welcome}>
                    Temps de lecture
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
                <View style={styles.button}>
                    <Button color="#FFFFFF" title="Commencer" onPress={() => Actions.main()} />
                </View>
            </View>
        );
    }
}

module.exports = LandingView;
