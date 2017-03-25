import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider, TouchableOpacity } from 'react-native';
import Interactable from 'react-native-interactable';
import { Actions } from "react-native-router-flux";


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
    onPress() {
        Actions.newsDescription({news: this.props.news})
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <View style={styles.newsContainer}>
                        <Image style={styles.image} borderRadius={10} source={{uri: this.props.news.image}} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.titleTime}><Image style={styles.iconTime} source={require('../resources/time-icon.png')} /> {this.props.news.time} min</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{this.props.news.title}</Text>
                            <Text style={styles.description}>{this.props.news.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = NewsView;
