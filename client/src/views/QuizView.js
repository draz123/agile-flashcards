/**
 * Created by SG0222865 on 4/11/2017.
 */
import React, {Component, PropTypes} from "react";
import {View, Text, TextInput, Button} from "react-native";
import styles from "../AppStyles";

export default class QuizView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            description: ''
        };
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text style={styles.titleText}>Quiz</Text>

                <Text style = {styles.wordDescription}>Here will be the text, which is describing the desired word</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(description) => this.setState({description})}
                    value={this.state.description}
                    multiline={true}
                />
                <Button
                    onPress={() => alert("Check clicked")}
                    title="Check"
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