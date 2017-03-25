import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#22CFC1',
        height: '100%'
    },
    button: {
        padding: 10,
        backgroundColor: '#22CFC1',
        borderBottomWidth: 4,
        borderBottomColor: '#40549F',
        borderStyle: 'solid'
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#40549F'
    },
    iconLeftMenu: {
        width: 25,
        height: 26,
        marginRight: 5,
        marginTop: 6
    }
});


class SideMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Menu 1" onPress={() => Actions.main()} />
                <Button title="Menu 2" onPress={() => Actions.main()} />
                <Button title="Menu 3" onPress={() => Actions.modal()} />
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
