import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider, Button } from 'react-native';
import {Actions} from "react-native-router-flux";
import NewsView from './news';
import Swiper from 'react-native-swiper';


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
            news: [
                {title: 'Éteindre ses lumières pour la planète', time: 7, description: 'Les grandes villes du monde se plongent dans l\'obscurité samedi à l\'occasion du dixième anniversaire de l\'initiative « Une heure pour la Terre », une mobilisation internationale contre le réchauffement climatique.', image: 'https://images.radio-canada.ca/w_635,h_357/v1/ici-info/16x9/opera-sydney-australie.jpg'},
                {title: 'RDC : une quarantaine de policiers décapités', time: 5, description: 'Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi. Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi.', image: 'https://images.radio-canada.ca/w_635,h_357/v1/ici-info/16x9/congo-rdc-casques-bleus.jpg'}
            ]
        };
    }
    render() {
        var news = this.state.news.map((n, i) => {
            return (<NewsView key={'news_' + i} news={n} />);
        });
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
                    {news}
                </Swiper>
            </View>
        );
    }
}

module.exports = ListNewsView;
