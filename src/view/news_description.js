// Lib imports
import React, { Component } from 'react';
import { Image, Slider, StyleSheet, Text, View, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    theme: {
        fontSize: 14,
        color: '#808080',
        paddingBottom: 10
    },
    title: {
        fontSize: 26,
        color: '#000000',
        paddingBottom: 5
    },
    date: {
        fontSize: 14,
        color: '#808080',
        paddingBottom: 20
    },
    description: {
        fontSize: 14,
        color: '#FFFFFF'
    },
    scrollView: {
        marginTop: 60
    },
    main: {
        padding: 10
    },
    image: {
        width: '100%',
        height: 200,
    }
});

// View
class NewsDescription extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Image style={styles.image}  source={{uri: this.props.news.image}} />
                    <View style={styles.main}>
                        <Text style={styles.theme}>ENVIRONNEMENT</Text>
                        <Text style={styles.title}>{this.props.news.title}</Text>
                        {this.props.news.publishedFirstTimeAt ?
                            <Text style={styles.date}>PUBLIÉ {this.props.news.publishedFirstTimeAt.substr(0, 16).replace('T', ' à ')}</Text> : null
                        }
                        <HTMLView style={styles.htmlView} value={this.props.news.body} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

module.exports = NewsDescription;
