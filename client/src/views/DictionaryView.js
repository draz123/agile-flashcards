/**
 * Created by SG0222865 on 4/11/2017.
 */
import React, {Component} from "react";
import {View, Text, Alert, Button, ListView} from "react-native";
import DictionaryListElement from "./components/DictionaryListElement"
import styles from "../AppStyles";

export default class DictionaryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonData: []
        };
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }

    componentDidMount() {
        this.getDictionary();
    }

    getDictionary() {
        var url = 'http://192.168.0.100:8080/dictionary';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({isLoading: false, jsonData: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log(this.state.jsonData)
        return (

            <View>
                <Text style={styles.titleText}>Dictionary</Text>
                <ListView style={styles.dictionaryList} contentContainerStyle={styles.dictionaryListContainer}
                          dataSource={this.dataSource.cloneWithRows(this.state.jsonData)}
                          renderRow={(rowData) => <Text>{"Word: "+ rowData.word + "\nDescription: " +rowData.description}</Text>}/>
                <Button style={styles.backButton}
                        onPress={() => navigate('MenuView')}
                        title="Back"
                        accessibilityLabel="See an informative alert"
                />
            </View>
        )
    }
}