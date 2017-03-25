import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider, Button } from 'react-native';
import {Actions} from "react-native-router-flux";
import NewsView from './news';


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
    constructor(props) {
        super(props);
        this.state = {
            news: {title: 'RDC : une quarantaine de policiers décapités', time: 5, description: 'Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi. Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi.'}
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <NewsView news={this.state.news} />
            </View>
        );
    }
}

module.exports = ListNewsView;
