import React from 'react';
import LoginScreen from './components/screens/loginScreen'
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import SalonHomeScreen from './components/screens/salonHomeScreen'
// import salonList from './components/screens/salonList';
import salonList from './components/screens/salonList'
import AddSalon from './components/screens/addSalon';
import AddSalonExtended from './components/screens/addSalonsExtended'
const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                {/* <Scene key='auth'>
                <Scene key="loginScreen" component= {LoginScreen} title="Login" initial />
                </Scene> */}
                <Scene key="main">
                    <Scene key="loginScreen" component= {LoginScreen} title="Login" initial />
                    <Scene key='salonHome' component={SalonHomeScreen} type={ActionConst.REPLACE}/>
                    <Scene key='salonList' component={salonList} hideNavBar/>
                    <Scene key='addSalon' component={AddSalon} title="Add Salon"/>
                    <Scene key='addSalonExtended' component={AddSalonExtended} title="Hang on"/>
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;