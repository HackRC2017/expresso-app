// Lib imports
import React, { Component } from 'react';
import { Image, Slider, StyleSheet, Text, View, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';

// App imports
import PreferenceService from '../services/preference';

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
        // Styles
        var htmlStyles = StyleSheet.create({
            a: { fontSize: PreferenceService.getFontSize() },
            p: { fontSize: PreferenceService.getFontSize() },
            li: { fontSize: PreferenceService.getFontSize() },
            div: { fontSize: PreferenceService.getFontSize() },
            span: { fontSize: PreferenceService.getFontSize() },
            strong: {fontSize: PreferenceService.getFontSize() },
            footer: {fontSize: PreferenceService.getFontSize() }
        });
        // Image source
        var imageSource = require('../resources/default_article.png');
        if (this.props.news.summaryMultimediaContent.concreteImages && this.props.news.summaryMultimediaContent.concreteImages.length) {
            imageSource = {uri: this.props.news.summaryMultimediaContent.concreteImages[0].mediaLink.href};
        }
        // Strip HTML
        var title = this.props.news.title.replace(/<(?:.|\n)*?>/gm, '').replace(/&nbsp;/g, ' ');

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Image style={styles.image}  source={imageSource} />
                    <View style={styles.main}>
                        <Text style={styles.theme}>{this.props.news.contentType.name}</Text>
                        <Text style={styles.title}>{title}</Text>
                        {this.props.news.publishedFirstTimeAt ?
                            <Text style={styles.date}>PUBLIÉ {this.props.news.publishedFirstTimeAt.substr(0, 16).replace('T', ' à ')}</Text> : null
                        }
                        <HTMLView stylesheet={htmlStyles} value={this.props.news.body.html} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

module.exports = NewsDescription;
