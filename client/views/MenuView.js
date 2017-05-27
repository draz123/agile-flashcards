/**
 * Created by SG0222865 on 4/6/2017.
 */
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Button, Text, Alert, TouchableHighlight, AppRegistry, Navigator} from "react-native";
import styles from "../AppStyles";

export default class MenuView extends Component {

    render() {
        const { navigate } = this.props.navigation;
        console.log("It's in MenuView's render");
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Agile fleshcards</Text>
                <Button
                    onPress={() => navigate('AddNewWordView')}
                    title="Add new word"
                    accessibilityLabel="See an informative alert"
                />
                <Button
                    onPress={() => navigate('QuizView')}
                    title="Quiz"
                    accessibilityLabel="See an informative alert"
                />
                <Button
                    onPress={() => navigate('DictionaryView')}
                    title="Dictionary"
                    accessibilityLabel="See an informative alert"
            />
            </View>
        );


    }


}

