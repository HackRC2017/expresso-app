// Lib imports
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider, Button } from 'react-native';
import { Actions } from "react-native-router-flux";

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    welcome: {
        fontSize: 32,
        textAlign: 'center',
        margin: 20,
        fontWeight: '200',
        marginTop: 100,
    },
    timeLabel: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
    descriptionLabel: {
        fontSize: 16,
        fontWeight: '100',
        textAlign: 'center',
        marginTop: 50,
        paddingLeft: 30,
        paddingRight: 30
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    slider: {
        width: 300,
        height: 20
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
        marginTop: 120
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
                    Mon Temps
                </Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={30}
                    step={1}
                    minimumTrackTintColor={'red'}
                    maximumTrackTintColor={'#E0E0E0'}
                    value={this.state.time}
                    onValueChange={(value) => {this.setState({time: value});}} />
                <Text style={styles.timeLabel}>
                    {this.state.time} minute{(this.state.time > 1) ? 's' : ''}
                </Text>

                <Text style={styles.descriptionLabel}>
                    Une sélection vous sera proposée en fonction de votre temps
                </Text>

                <View style={styles.button}>
                    <Button color="#FFFFFF" title="Commencer" onPress={() => Actions.main()} />
                </View>
            </View>
        );
    }
}

module.exports = LandingView;
