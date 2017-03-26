// Lib imports
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import store from 'react-native-simple-store';
import { Actions } from "react-native-router-flux";

// App imports
import { Url } from '../common/constant';
import NewsView from './news';
import PreferenceService from '../services/preference';
import TimerService from '../services/timer';


// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

// View
class ListNewsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
    componentDidMount() {
        var remainingTime = TimerService.getRemainingTime();
        var themesIds = [];
        // Build url
        var url = Url.news;
        url = url + '?max_readtime=' + remainingTime;
        var themeIds = PreferenceService.getThemes();
        if (themeIds && themeIds.length) url = url + '&themes=' + themeIds.join(',');
        // Request server
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response)
            response.json().then((response) => {
                console.log(response.articles);
                this.setState({news: response.articles});
            })
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        var news = this.state.news.map((n, i) => {
            return (<NewsView key={'news_' + i} news={n} />);
        });
        console.log();
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
