import React, { Component} from 'react';
import { SafeAreaView } from 'react-native'
import RouterComponent from './Router';
import { createStore, applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import firebase from 'firebase';


class App extends Component{
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyC1EZ-pvVVCfNVf1ql9g0znpPXaE749gPE',
        authDomain: 'manager-9fc4d.firebaseapp.com',
        databaseURL: 'https://manager-9fc4d.firebaseio.com',
        projectId: 'manager-9fc4d',
        storageBucket: 'manager-9fc4d.appspot.com',
        messagingSenderId: '297094500650'
      };
      firebase.initializeApp(config);
}
componentDidMount() {
  
}
  render(){
    return(
      <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
      </Provider>
    )
  }
}

export default App;