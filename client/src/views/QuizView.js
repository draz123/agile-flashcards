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
            initialCount: 0
        };
        // this.dataSource = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // });
    }

    startQuiz() {
        var quizURL = 'http://192.168.0.102:8080/quiz';
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

        var quizURL = 'http://192.168.0.102:8080/quiz';
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
            })
            .catch((error) => {
                console.error(error);
            });
        if (this.state.jsonData.id === 1) {
            Alert.alert("Good job");
        }
        else {
            Alert.alert("Wrong answer");
        }
    }

    getSummary() {
        var quizURL = 'http://192.168.0.102:8080/summary';
        fetch(quizURL)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({isLoading: false, initialCount: responseJson});
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
            <View>
                <Text style={styles.titleText}>Quiz</Text>
                {renderIf(this.state.status && !this.state.summaryStatus)(
                    <View>
                        <Text style={styles.quizWord}>
                            {this.state.jsonData.word}
                        </Text>
                        <TextInput ref={'input'}
                                   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                   onChangeText={(description) => this.setState({description})}
                                   value={this.state.description}
                                   multiline={true}
                        />
                        <Button
                            onPress={() => this.checkWord()}
                            title="Check"
                            accessibilityLabel="See an informative alert"
                        />
                        <Button
                            onPress={() => this.getSummary()}
                            title="finish"
                            accessibilityLabel="See an informative alert"
                        />
                    </View>
                )}
                {renderIf(!this.state.status && !this.state.summaryStatus)(
                    <Button
                        onPress={() => this.startQuiz()}
                        title="Start quiz"
                        accessibilityLabel="See an informative alert"
                    />
                )}
                {renderIf(this.state.summaryStatus)(
                    <View>
                        <Text style={styles.quizWord}>
                             {this.state.initialCount} records.
                        </Text>
                    </View>
                )}
            </View>
        )
    }
}