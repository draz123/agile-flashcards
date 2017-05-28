import React, {Component, PropTypes} from "react";
import {View, Alert, Text, Button, TextInput} from "react-native";
import styles from "../AppStyles";

export default class AddNewWordView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            description: ''
        };
    }

    addWordToDictionary(){
        Alert.alert("Word with decription added");
        fetch('http://192.168.0.100:8080/dictionary', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '0',
                word: this.state.word,
                description: this.state.description,
                operation: "add"
            })
        })
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text style ={styles.titleText} >Word!</Text>
                <Text>Add new word</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(word) => this.setState({word})}
                    value={this.state.word}
                />
                <Text>Add description...</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(description) => this.setState({description})}
                    value={this.state.description}
                    multiline={true}
                />
                <Button
                    onPress={() =>alert("Translator clicked")}
                    title="Translate"
                    accessibilityLabel="See an informative alert"
                />

                <Button
                    onPress={() => this.addWordToDictionary()}
                    title="Add word"
                    accessibilityLabel="See an informative alert"
                />

                <Button
                    onPress={() => navigate('MenuView')}
                    title="Back"
                    accessibilityLabel="See an informative alert"
                />
            </View>
        )
    }
}

