import React, {Component, PropTypes} from "react";
import {View, Alert, Text, Button, TextInput} from "react-native";
import styles from "../AppStyles";

export default class AddNewWordView extends Component {

    constructor(props) {
        super(props);
        this.translate = this.translate.bind(this)

        this.state = {
            word: '',
            description: ''
        };
    }

    addWordToDictionary() {
        Alert.alert("Word with decription added");
        fetch('http://192.168.0.102:8080/dictionary', {
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
        this.refs['word'].setNativeProps({text: ''});
        this.state.word='';
        this.refs['description'].setNativeProps({text: ''});
        this.state.description='';

    }

    translate() {
        fetch('http://192.168.0.102:8080/translate?word=' + this.state.word)
            .then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson.description);
                this.setState({description : responseJson.description});
            })
            .catch((error) => {
                console.error(error);
            });
        this.refs['description'].setNativeProps({text: this.state.description});

    }


    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text>Add new word</Text>
                <TextInput
                    ref={'word'}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(word) => this.setState({word})}
                    value={this.state.word}
                />
                <Text>Add description...</Text>
                <TextInput
                    ref={'description'}
                    style={{height: 50, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(description) => this.setState({description})}
                    value={this.state.description}
                    multiline={true}
                />
                <Button
                    onPress={this.translate}
                    title="Translate"
                    accessibilityLabel="See an informative alert"
                />

                <Button
                    onPress={() => this.addWordToDictionary()}
                    title="Add word"
                    accessibilityLabel="See an informative alert"
                />

            </View>
        )
    }
}

