import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider } from 'react-native';
import Interactable from 'react-native-interactable';


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
        height: 585,
        marginTop: 60
    },
    image: {
        width: '100%',
        height: 330,
    },
    interactable: {
        borderWidth: 0
    },

    // Info container
    infoContainer: {
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: -10
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
        overflow: 'hidden',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
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

                <Interactable.View
                    key="first"
                    style={styles.interactable}
                    horizontalOnly={true}
                    snapPoints={[
                    {x: 585},
                    {x: 0},
                    {x: -585}
                ]}>


                    <View style={styles.newsContainer}>
                        <Image style={styles.image} borderRadius={10} source={require('../resources/news-1.jpg')} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.titleTime}><Image style={styles.iconTime} source={require('../resources/time-icon.png')} /> 10 min</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>RDC : une quarantaine de policiers décapités</Text>
                            <Text style={styles.description}>Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi. Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi.</Text>
                        </View>
                    </View>

                </Interactable.View>
            </View>
        );
    }
}

module.exports = NewsView;
