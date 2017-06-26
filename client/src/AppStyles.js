/**
 * Created by SG0222865 on 4/11/2017.
 */
import {StyleSheet} from 'react-native';


export default StyleSheet.create({


    container: {

        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1D7CA7'
    },
    titleText: {
        justifyContent: 'center',
        top: 0,
        textAlign: 'center',
        color: '#EDF2F4',
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 250,
        paddingTop: 20
    },

    wordDescription: {
        fontSize: 20,
        fontWeight: 'bold',
    },


    quizWord: {
        color: 'white',
        textAlign: 'center',
        fontSize: 28,
    },

    editWord: {
        textAlign: 'center',
        color:'white',
        fontSize: 28,
    },

    editWordText: {
        justifyContent: 'center',
        top: 0,
        textAlign: 'center',
        color: '#EDF2F4',
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 20,
        paddingTop: 20
    },

    mainMenuButtonView: {
        borderRadius: 10,
        padding: 10,
        color: '#8D99AE',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },

    addNewWordViewContainer: {
        justifyContent: 'center',
        top: 0,
        textAlign: 'center',
        paddingBottom: 250,
    },

    editWordInfo:{
        padding:20,
        paddingBottom:40,
        color:'white',
        textAlign: 'center',
    },

    textInput: {
        margin:10,
        color:'white',
        height: 50,
        padding: 10,
    },
    editIputViewContainer:{
        paddingBottom:50,
    },

    editInputText : {
        margin:10,
        borderColor: '#1D7CA7',
        padding: 10,
        paddingBottom:30,
        borderWidth: 1
    },
    dictionaryListContainer:{
        // color:'white',
    },

    defaultHeading:{
        color:'white',
        textAlign: 'center',
    },

    rowContainer: {
        flex: 1,
        padding: 10,
        margin:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#2D8DB8"
    },

    textGroup: {
        marginLeft: 12,
    },

    wordText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'white'
    },
    descriptionText: {
        color:'white',
        fontSize: 14,
        fontStyle: 'italic',
    },
    icon: {
        height: 25,
        width: 25,
        margin: 6,
    },

    iconsGroup: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
});