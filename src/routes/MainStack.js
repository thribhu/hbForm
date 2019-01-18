import {createStackNavigator, createAppContainer} from 'react-navigation';
import { HomeScreen, ProfileScreen, AddScreen} from '../screens';

const appNavigator = createStackNavigator(
    {
        MainScreen: {screen :HomeScreen},
        Profile: ProfileScreen,
        AddScreen:AddScreen
    }
)

export default appNavigator;