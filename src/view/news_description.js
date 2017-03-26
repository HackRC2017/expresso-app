// Lib imports
import React, { Component } from 'react';
import { Image, Slider, StyleSheet, Text, View, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';

// App imports
import PreferenceService from '../services/preference';

// View
class NewsDescription extends Component {
    render() {
        // Styles
        var textColor = PreferenceService.isHighContrast() ? '#FFFFFF' : '#000000';
        var bgColor = PreferenceService.isHighContrast() ? '#303030' : '#F5FCFF';

        // Styles
        var styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: bgColor
            },
            theme: {
                fontSize: 14,
                color: '#808080',
                paddingBottom: 10
            },
            title: {
                fontSize: 26,
                color: textColor,
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

        var htmlStyles = StyleSheet.create({
            a: { fontSize: PreferenceService.getFontSize(), color: textColor },
            p: { fontSize: PreferenceService.getFontSize(), color: textColor },
            em: {fontSize: PreferenceService.getFontSize(), color: textColor },
            li: { fontSize: PreferenceService.getFontSize(), color: textColor },
            div: { fontSize: PreferenceService.getFontSize(), color: textColor },
            span: { fontSize: PreferenceService.getFontSize(), color: textColor },
            strong: {fontSize: PreferenceService.getFontSize(), color: textColor },
            footer: {fontSize: PreferenceService.getFontSize(), color: textColor },
            h1: {fontSize: PreferenceService.getFontSize(), color: textColor },
            h2: {fontSize: PreferenceService.getFontSize(), color: textColor },
            h3: {fontSize: PreferenceService.getFontSize(), color: textColor },
            h4: {fontSize: PreferenceService.getFontSize(), color: textColor },
            h5: {fontSize: PreferenceService.getFontSize(), color: textColor },
            figcaption: {fontSize: PreferenceService.getFontSize(), color: textColor },
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
