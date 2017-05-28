import {StackNavigator} from "react-navigation";
import {AppRegistry} from "react-native";

import MenuView from "./views/MenuView";
import AddNewWordView from "./views/AddNewWordView";
import QuizView from "./views/QuizView";
import DictionaryView from "./views/DictionaryView";

const AwesomeProject = StackNavigator({
    MenuView: {screen: MenuView},
    AddNewWordView: {screen: AddNewWordView},
    QuizView: {screen: QuizView},
    DictionaryView: {screen: DictionaryView}
});


export default AwesomeProject
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
