// Lib imports
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Actions, ActionConst, Scene, Router, Modal} from 'react-native-router-flux';
import store from 'react-native-simple-store';

// Control
import NavigationDrawer from './common/left-menu';
import NavBar from './common/navbar';

// Services
import PreferenceService from './services/preference';

// Views
import LandingView from './view/landing';
import ListNewsView from './view/list_news';
import NewsDescriptionView from './view/news_description'
import SettingsView from './view/settings';

// Styles
const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#dd0000',
    },
    navBarButton: {
        tintColor: '#FFFFFF'
    },
    navBarTitle: {
        color: '#FFFFFF',
        fontWeight: '100'
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
        <Scene key="modal" component={LandingView} hideNavBar={true} title="Welcome" initial />
        <Scene key="main" component={NavigationDrawer} open={false} type={ActionConst.REPLACE}>
            <Scene key="mainNavbar" navBar={NavBar} drawerImage={require('./resources/hamburger.png')} >
                <Scene key="newsList" component={ListNewsView} title="TEMPO" initial />
                <Scene key="newsDescription" component={NewsDescriptionView} title="NOUVELLE" />
                <Scene key="settings" component={SettingsView} title="PRÉFÉRENCES" />
            </Scene>
        </Scene>
    </Scene>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        // Init size
        store.get('sizeFont').then((result) => {
            if (result) {
                PreferenceService.setSize(result.sizeFont);
            } else {
                store.save('sizeFont', {sizeFont: 2});
                PreferenceService.setSize(2);
            }
        });
        // Init theme
        store.get('themeIds').then((result) => {
            if (result) {
                PreferenceService.setThemes(result.themeIds);
            } else {
                store.save('themeIds', {themeIds: []});
                PreferenceService.setThemes([]);
            }
        });
        // Init constrast
        store.get('isHighContrast').then((result) => {
            if (result) {
                PreferenceService.setContrast(result.isHighContrast);
            } else {
                store.save('isHighContrast', {isHighContrast: false});
                PreferenceService.setContrast(false);
            }
        });
    }
    render() {
        return <Router scenes={scenes} navigationBarStyle={styles.navBar} barButtonIconStyle={styles.navBarButton} titleStyle={styles.navBarTitle} />
    }
}

module.exports = App;
