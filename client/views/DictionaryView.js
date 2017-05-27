/**
 * Created by SG0222865 on 4/11/2017.
 */
import React, {Component, PropTypes} from "react";
import {View, Text, Button, ListView} from "react-native";
import styles from "../AppStyles";

export default class DictionaryView extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {dataSource: ds.cloneWithRows(['row 1', 'row 2']),};
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text>Dictionary</Text>
                <ListView style={styles.listView} dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>}/>

                <Button
                    onPress={() => navigate('MenuView')}
                    title="Back"
                    accessibilityLabel="See an informative alert"
                />
            </View>
        )
    }
}