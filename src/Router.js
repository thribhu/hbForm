import React from 'react';
import LoginScreen from './components/screens/loginScreen'
import { Scene, Router } from 'react-native-router-flux';
import SalonHomeScreen from './components/screens/salonHomeScreen'
import salonList from './components/screens/salonList.js';
const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key='auth'>
                <Scene key="loginScreen" component= {LoginScreen} title="Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene key='salonHome' component={SalonHomeScreen} />
                    <Scene key='salonList' component={salonList} hideNavBar/>
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;