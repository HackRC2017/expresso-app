// Lib imports
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Actions, ActionConst, Scene, Router, Modal} from 'react-native-router-flux';

// Control
import NavigationDrawer from './common/left-menu';
import NavBar from './common/navbar';

// Views
import LandingView from './view/landing';
import ListNewsView from './view/list_news';
import NewsView from './view/news';
import NewsDescriptionView from './view/news_description'

// Styles
const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'red',
    },
    navBarButton: {
        tintColor: '#FFFFFF'
    }
});

class CustomNavBar extends React.Component {
    render() {
        return (
            <NavBar />
        );
    }
}

// Scenes
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="modal" component={Modal} direction="vertical" >
            <Scene key="landing" component={LandingView} title="Welcome" />
        </Scene>
        <Scene key="main" component={NavigationDrawer} open={false} initial>
            <Scene key="mainNavbar" navBar={NavBar} drawerImage={require('./resources/hamburger.png')} navigationBarTitleImage={require('./resources/logo_rc_white.png')} >
                <Scene key="newsList" component={ListNewsView} type={ActionConst.REPLACE} initial />
                <Scene key="news" component={NewsView} />
                <Scene key="newsDescription" component={NewsDescriptionView} />
            </Scene>
        </Scene>
    </Scene>
);

class App extends React.Component {
    render() {
        return <Router scenes={scenes} navigationBarStyle={styles.navBar} barButtonIconStyle={styles.navBarButton} />
    }
}

module.exports = App;
