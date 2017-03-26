import React, { Component } from 'react';
import { Image, Text, View, Button, StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%'
    },
    iconHeader: {
        marginTop: 40,
        marginLeft: 20,
        marginBottom: 40,
        width: 250,
        height: 40,
    },
    button: {
        padding: 5,
        paddingLeft: 15,
        width: '100%',
        alignItems: 'flex-start',
    },
    buttonSelected: {
        padding: 5,
        paddingLeft: 10,
        borderLeftWidth: 5,
        borderLeftColor: 'red',
        borderStyle: 'solid',
        width: '100%',
        alignItems: 'flex-start',
    }
});


class SideMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.iconHeader} source={require('../resources/logo_rc_header.png')} />
                <View style={styles.buttonSelected}><Button color="#404040" title="TEMPO" onPress={() => Actions.modal()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="NEWS" onPress={() => Actions.main()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="SETTINGS" onPress={() => Actions.settings()} /></View>
            </View>
        );
    }
}

export default class NavigationDrawer extends Component {
    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key: state.key, open: true})}
                onClose={()=>Actions.refresh({key: state.key, open: false})}
                type="displace"
                content={<SideMenu />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ( {main: {opacity:Math.max(0.54,1-ratio)}} )} >
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}
