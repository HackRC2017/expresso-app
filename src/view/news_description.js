import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';


// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        fontSize: 26,
        color: '#000000',
        paddingBottom: 10
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
        var htmlContent = '<p><a href="http://jsdf.co">&hearts; nice job!</a></p>'
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Image style={styles.image}  source={{uri: this.props.news.image}} />
                    <View style={styles.main}>
                        <Text style={styles.title}>{this.props.news.title}</Text>
                        <HTMLView style={styles.htmlView} value={this.props.news.body} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

module.exports = NewsDescription;
