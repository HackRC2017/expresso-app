import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider } from 'react-native';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    newsContainer: {

    },
    image: {
        width: '100%',
        height: 320,
        marginTop: 60
    },

    // Info container
    infoContainer: {
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    iconTime: {
        width: 20,
        height: 20
    },
    titleTime: {
        fontSize: 26,
        color: '#FFFFFF'
    },

    // Text container
    textContainer: {
        backgroundColor: '#404040',
        padding: 10,
        height: 225,
        overflow: 'hidden'
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
class NewsView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.newsContainer}>
                    <Image style={styles.image} source={require('../resources/news-1.jpg')} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.titleTime}><Image style={styles.iconTime} source={require('../resources/time-icon.png')} /> 10 min</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>RDC : une quarantaine de policiers décapités</Text>
                        <Text style={styles.description}>Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi. Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi.</Text>
                    </View>
                </View>
                {/*<Text>{this.props.news.title}</Text>
            <Text>{this.props.news.description}</Text>*/}
            </View>
        );
    }
}

module.exports = NewsView;
