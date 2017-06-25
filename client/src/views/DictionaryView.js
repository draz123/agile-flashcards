/**
 * Created by SG0222865 on 4/11/2017.
 */
import React, {Component} from "react";
import {View, Text, Alert, Button, ListView, Modal, TouchableHighlight, TextInput} from "react-native";
import styles from "../AppStyles";
import rowStyles from './components/Row';
import Row from '../views/components/Row';
import Header from './components/Header';

export default class DictionaryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonData: [],
            modalVisible: false,
        };
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.getDictionary = this.getDictionary.bind(this);
    }

    componentDidMount() {
        this.getDictionary();
    }

    getDictionary() {
        console.log("Start of getDictionary execution");
        var url = 'http://192.168.0.102:8080/dictionary';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({isLoading: false, jsonData: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
        this.forceUpdate();
        console.log("End of getDictionary execution")
    }


    render() {
        const {navigate} = this.props.navigation;
        const dictionaryList = this.dataSource.cloneWithRows(this.state.jsonData);
        return (

            <View>
                <ListView contentContainerStyle={styles.dictionaryListContainer}
                          dataSource={dictionaryList}
                          renderRow={(rowData) => <Row data={rowData} refreshList={this.getDictionary}
                                                       editRow={this.editRow}/>}
                          renderSeparator={(sectionId, rowId) => <View key={rowId} style={rowStyles.separator}/>}
                          renderHeader={() => <Header />}
                          automaticallyAdjustContentInsets={false}
                />
            </View>

        )
    }
}