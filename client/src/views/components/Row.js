import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    Alert,
    Navigator,
    Modal,
    TextInput,
    Button
} from 'react-native';
import styles from "../../AppStyles";


export default class Row extends Component {
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
        this.editRow = this.editRow.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateRow = this.updateRow.bind(this);
        this.state = {
            modalVisible: false,
        };

    }

    closeModal() {
        this.setState({modalVisible: false})
    }

    deleteRow() {
        console.log("Start of deleteRow execution");
        fetch('http://192.168.0.100:8080/dictionary', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.props.data.id,
                word: this.props.data.word,
                description: this.props.data.description,
                operation: "delete"
            })
        }).then(() => this.props.refreshList());

        console.log("End of deleteRow execution");

    }


    updateRow() {
        Alert.alert("Done");
        fetch('http://192.168.0.100:8080/dictionary', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '0',
                word: this.props.data.word,
                description: this.state.description,
                operation: "edit"
            })
        }).then(() => this.props.refreshList());
        this.refs['description'].setNativeProps({text: ''});
        this.setState({modalVisible: false})
    }

    editRow() {
        this.setState({modalVisible: true})
    }

    render() {
        return (
            <View style={styles.rowContainer}>
                <View style={styles.textGroup}>
                    <Text style={styles.wordText}>
                        {`${this.props.data.word} \n `}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {`${this.props.data.description}`}
                    </Text>
                </View>
                <View style={styles.iconsGroup}>
                    <TouchableHighlight onPress={this.editRow}>
                        <Image
                            style={styles.icon}
                            source={require('./editIconWhite.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.deleteRow}>
                        <Image
                            style={styles.icon}
                            source={require('./removeIconWhite.png')}
                        />
                    </TouchableHighlight>
                </View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }}
                >
                    <View style={styles.container}>
                        <Text style={styles.editWordText}>Edit word</Text>
                        <Text style={styles.editWord}>{this.props.data.word} </Text>
                        <Text style={styles.editWordInfo}>Change description from {this.props.data.description} to</Text>
                        <View style={styles.editIputViewContainer}>
                            <TextInput style={styles.editInputText}
                                       ref={'description'}
                                       onChangeText={(description) => this.setState({description})}
                                       value={this.state.description}
                                       multiline={true}
                            />
                        </View>
                        <View style={styles.mainMenuButtonView}>
                            <Button
                                onPress={this.updateRow}
                                title="Edit"
                                accessibilityLabel="See an informative alert"
                            />
                        </View>
                        <View style={styles.mainMenuButtonView}>
                            <Button
                                onPress={this.closeModal}
                                title="Cancel"
                                accessibilityLabel="See an informative alert"
                            />
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}


