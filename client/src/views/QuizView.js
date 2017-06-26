/**
 * Created by SG0222865 on 4/11/2017.
 */
import React, {Component, PropTypes} from "react";
import {View, Alert, Text, TextInput, Button} from "react-native";
import styles from "../AppStyles";
import renderIf from "../views/renderif";

export default class QuizView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'test word',
            description: '',
            jsonData: [],
            status: false,
            summaryStatus: false,
            summary: 0
        };

    }

    startQuiz() {
        var quizURL = 'http://192.168.0.100:8080/quiz';
        fetch(quizURL)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({isLoading: false, jsonData: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
        this.setState({
            status: !this.state.status
        });
        console.log('toggle button handler: ' + this.state.status);
    }

    checkWord() {

        var quizURL = 'http://192.168.0.100:8080/quiz';
        fetch(quizURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                word: this.state.jsonData.word,
                description: this.state.description,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({isLoading: false, jsonData: responseJson});
                if (this.state.jsonData.id === 1) {
                    Alert.alert("Good job");
                }
                else {
                    Alert.alert("Wrong answer");
                }
            })
            .catch((error) => {
                console.error(error);
            });

        this.refs['input'].setNativeProps({text: ''});
    }

    getSummary() {
        var quizURL = 'http://192.168.0.100:8080/summary';
        fetch(quizURL)
            .then((response) => response)
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({isLoading: false, summary: responseJson._bodyText});
            })
            .catch((error) => {
                console.error(error);
            });
        this.setState({
            summaryStatus: true,
        });
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                {renderIf(this.state.status && !this.state.summaryStatus)(
                    <View>

                        <Text style={styles.quizWord}>
                            {this.state.jsonData.word}
                        </Text>
                        <TextInput ref={'input'}
                                   style={styles.textInput}
                                   onChangeText={(description) => this.setState({description})}
                                   value={this.state.description}
                                   multiline={true}
                        />
                        <View style={styles.mainMenuButtonView}>
                            <Button
                                onPress={() => this.checkWord()}
                                title="Check"
                                accessibilityLabel="See an informative alert"
                            />
                        </View>
                        <View style={styles.mainMenuButtonView}>
                            <Button
                                onPress={() => this.getSummary()}
                                title="finish"
                                accessibilityLabel="See an informative alert"
                            />
                        </View>
                    </View>
                )}

                {renderIf(!this.state.status && !this.state.summaryStatus)(
                    <View>
                        <Text style={styles.titleText}>Quiz</Text>
                    <View style={styles.mainMenuButtonView}>
                        <Button
                            onPress={() => this.startQuiz()}
                            title="Start quiz"
                            accessibilityLabel="See an informative alert"
                        />
                    </View>
                    </View>
                )}

                {renderIf(this.state.summaryStatus)(
                    <View>
                        <Text style={styles.titleText}>Summary</Text>
                        <Text style={styles.quizWord}>
                            {this.state.summary}
                        </Text>
                    </View>
                )}

            </View>
        )
    }
}