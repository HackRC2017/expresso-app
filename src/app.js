// Lib imports
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Actions, ActionConst, Scene, Router, Modal} from 'react-native-router-flux';

// Views
import LandingView from './view/landing';
import ListNewsView from './view/list_news';
import NewsView from './view/news';

// Styles
const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'red'
    }
});


// Scenes
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="modal" component={Modal} direction="vertical" initial>
            <Scene key="landing" component={LandingView} title="Welcome"/>
        </Scene>
        <Scene key="newsList" component={ListNewsView} type={ActionConst.REPLACE} title="News"/>
        <Scene key="news" component={NewsView} title="News"/>
    </Scene>
);

class App extends React.Component {
    render() {
        return <Router scenes={scenes} navigationBarStyle={styles.navBar}  />
    }
}

module.exports = App;
