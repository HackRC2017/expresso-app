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
        paddingLeft: 7,
        borderLeftWidth: 8,
        borderLeftColor: '#26495C',
        borderStyle: 'solid',
        width: '100%',
        alignItems: 'flex-start',
    },
    buttonSeparator: {
        padding: 5,
        paddingLeft: 15,
        width: '100%',
        alignItems: 'flex-start',
        borderTopWidth: 2,
        borderTopColor: '#909090',
        borderStyle: 'solid'
    },
    buttonBold: {
        paddingTop: 4,
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: '500',
        color: '#404040',
    }
});


class SideMenu extends Component {
    static contextTypes = {
        drawer: React.PropTypes.object
    };
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.iconHeader} source={require('../resources/logo_rc_header.png')} />
                <View style={styles.buttonSelected}><Button color="#404040" title="TEMPO" onPress={() => Actions.modal()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="INTERNATIONAL" onPress={() => Actions.main()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="POLITIQUE" onPress={() => Actions.main()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="ÉCONOMIE" onPress={() => Actions.main()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="SPORTS" onPress={() => Actions.main()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="SANTÉ" onPress={() => Actions.main()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="ARTS" onPress={() => Actions.main()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="SCIENCE" onPress={() => Actions.main()} /></View>
                <View style={styles.button}><Button color="#404040" style={styles.button} title="TECHNO" onPress={() => Actions.main()} /></View>
                <View style={styles.buttonSeparator}><Text color="#404040" style={styles.buttonBold} onPress={() => {this.context.drawer.close(); Actions.settings()}}>PRÉFÉRENCES</Text></View>
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
