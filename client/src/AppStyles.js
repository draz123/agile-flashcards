/**
 * Created by SG0222865 on 4/11/2017.
 */
import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#FFFFFF'
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#FFCDD2'
    },
    titleText: {
        justifyContent: 'center',
        top: 0,
        textAlign: 'center',
        color: '#F44336',
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom:20,
        paddingTop:20
    },

    dictionaryListContainer: {

    },

    wordDescription: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    backButton: {
        flex:0,
        color: 'red',
        position:'absolute',
        bottom: 50,
        left: 0,
        fontSize: 20,

    },

    quizWord: {
        textAlign: 'center',
        fontSize: 28,
    },

    mainMenuButton: {
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },

    container3: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "black"
    },

    textGroup: {
        marginLeft: 12,
    },

    wordText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionText: {

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