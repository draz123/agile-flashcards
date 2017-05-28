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
        paddingBottom:120,
        paddingTop:60
    },
    dictionaryList: {
        flex: 0,
        borderWidth: 2,
    },
    dictionaryListContainer: {
        alignItems: 'center',
        justifyContent: 'center'

    },

    wordDescription: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    backButton: {
        flex:0,
        position: 'absolute',
        color: 'red',
        bottom: 0,
        left: 0,
        fontSize: 20,

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
    }

});