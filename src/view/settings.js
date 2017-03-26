// Lib imports
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Body, ListItem, Text, CheckBox } from 'native-base';
import { Actions } from "react-native-router-flux";
import store from 'react-native-simple-store';
var TextNative = require('react-native').Text;

// App import
import themes from '../common/theme';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70
    },
    containerTitle: {
        borderBottomWidth: 2,
        borderBottomColor: '#E0E0E0',
        borderStyle: 'solid',
        padding: 10
    },
    titleLabel: {
        color: '#808080',
        fontWeight: 'bold'
    }
});

// View
class SettingsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: themes,
            checkedIds: []
        };
    }
    componentDidMount() {
        // Get checkedIds from local storage
        store.get('checkedIds').then((checkedIds) => {
            if (checkedIds) { this.setState({checkedIds: checkedIds.checkedIds}); }
        })
    }
    onChange(theme, checked) {
        var checkedIds = this.state.checkedIds;
        if (checked) {
            checkedIds.splice(checkedIds.indexOf(theme.id), 1);
        } else {
            checkedIds.push(theme.id);
        }
        // Update state
        this.setState({checkedIds: checkedIds})
        // Persiste in local storage
        store.save('checkedIds', {checkedIds: checkedIds});
    }
    render() {
        var themesRow = this.state.themes.map((t, i) => {
            var isChecked = this.state.checkedIds.indexOf(t.id) > -1;
            return (
                <ListItem key={'theme_' + i} onPress={this.onChange.bind(this, t, isChecked)}>
                    <CheckBox checked={isChecked} />
                    <Body>
                        <Text>{t.name}</Text>
                    </Body>
                </ListItem>
            );
        });
        return (
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <TextNative style={styles.titleLabel}>Thèmes Tempo</TextNative>
                </View>
                <Container>
                    <Content >
                        {themesRow}
                    </Content>
                </Container>
            </View>
        );
    }
}

module.exports = SettingsView;
