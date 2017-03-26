// Lib imports
import React, { Component } from 'react';
import { StyleSheet, View, Slider } from 'react-native';
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
        fontWeight: 'bold',
        fontSize: 18
    },
    containerSlider: {
        padding: 10
    },
    exampleLabel: {

    },
    slider: {

    }
});

// View
class SettingsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: themes,
            checkedIds: [],
            sizeFont: 2
        };
    }
    componentDidMount() {
        // Get checkedIds from local storage
        store.get('checkedIds').then((checkedIds) => {
            if (checkedIds) { this.setState({checkedIds: checkedIds.checkedIds}); }
        })
        // Get size from local storage
        store.get('sizeFont').then((sizeFont) => {
            if (sizeFont) { this.setState({sizeFont: sizeFont.sizeFont}); }
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
        // Persist in local storage
        store.save('checkedIds', {checkedIds: checkedIds});
    }
    onSliderChange(value) {
        // Update state
        this.setState({sizeFont: value});
        // Persist in local storage
        store.save('sizeFont', {sizeFont: value});
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
        var fontSize = 14 + (this.state.sizeFont * 2);
        return (
            <View style={styles.container}>
                {/* ========================= Size ========================= */}
                <View style={styles.containerTitle}>
                    <TextNative style={styles.titleLabel}>Taille Texte</TextNative>
                </View>
                <View style={styles.containerSlider}>
                    <Slider
                        style={styles.slider}
                        minimumValue={1}
                        maximumValue={3}
                        step={1}
                        minimumTrackTintColor={'red'}
                        maximumTrackTintColor={'#E0E0E0'}
                        value={this.state.sizeFont}
                        onValueChange={this.onSliderChange.bind(this)} />
                    <TextNative style={{fontSize: fontSize}}>Exemple taille</TextNative>
                </View>

                {/* ======================== Themes ========================= */}
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
