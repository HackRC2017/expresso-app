// Lib imports
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider, Button } from 'react-native';
import { Actions } from "react-native-router-flux";
import store from 'react-native-simple-store';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    button: {
        backgroundColor: '#26495C',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 100
    }
});

// View
class SettingsView extends Component {
    constructor(props) {
        super(props);
        var timeValue = store.get('timeValue')
        this.state = {
            time: 10
        };
    }
    componentDidMount() {
        // Get timeValue from local storage
        store.get('timeValue').then((timeValue) => {
            if (timeValue) { this.setState({time: timeValue}); }
        })
    }
    onChange(value) {
        this.setState({time: value});
        store.save('timeValue', value);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button color="#FFFFFF" title="Commencer" onPress={() => Actions.main()} />
                </View>
            </View>
        );
    }
}

module.exports = SettingsView;
