import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {  ProfileScreen, AddScreen} from '../screens';
import { HomeScreen} from '../screens/HomeScreen'

const _appNavigator = createBottomTabNavigator
(
    {
        MainScreen:  HomeScreen,
        Profile: ProfileScreen,
        AddScreen:AddScreen
    }
)

export default _appNavigator;