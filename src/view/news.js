import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Slider, TouchableOpacity } from 'react-native';
import { Actions } from "react-native-router-flux";


// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        padding: 10
    },
    newsContainer: {
        height: 570,
        marginTop: 60
    },
    image: {
        width: '100%',
        height: 330,
    },

    // Time container
    infoContainer: {
        backgroundColor: '#26495C',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 30,
        paddingLeft: 12,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    iconTime: {
        width: 18,
        height: 20,
        position: 'absolute',
        left: 10,
        top: 6
    },
    labelTime: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: 23
    },

    // Info container
    titleContainer: {
        backgroundColor: '#1A1A1A',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
        height: 60,
    },
    titleLabel: {
        fontSize: 20,
        color: '#FFFFFF'
    },

    // Text container
    textContainer: {
        backgroundColor: '#262626',
        padding: 10,
        height: 160,
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
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF'
    },
    titleContainerText: {
        width: 300
    },
    iconBookmark: {
        width: 24,
        height: 36,
        position: 'absolute',
        right: 15
    }
});

// View
class NewsView extends Component {
    onPress() {
        Actions.newsDescription({news: this.props.news})
    }
    render() {
        var readTime = this.props.news.readTime.total.minutes;
        if (this.props.news.readTime.total.seconds > 30) {
            readTime++;
        }
        var imageSource = require('../resources/default_article.png');
        if (this.props.news.summaryMultimediaContent.concreteImages && this.props.news.summaryMultimediaContent.concreteImages.length) {
            imageSource = {uri: this.props.news.summaryMultimediaContent.concreteImages[0].mediaLink.href};
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <View style={styles.newsContainer}>
                        <View style={styles.infoContainer}>
                            <Image style={styles.iconTime} source={require('../resources/time_icon.png')} />
                            <Text style={styles.labelTime}>{readTime} MIN.</Text>
                        </View>
                        <Image style={styles.image} source={imageSource} />
                        <View style={styles.titleContainer}>
                            <View style={styles.titleContainerText}>
                                <Text accessible={true} accessibilityLabel={'Titre'} style={styles.titleLabel}>{this.props.news.title}</Text>
                            </View>
                            <Image style={styles.iconBookmark} source={require('../resources/icon-bk-not.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>{this.props.news.summary}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = NewsView;
