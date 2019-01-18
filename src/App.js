// import React, { Component} from 'react';
// // import { View, Text, Image } from 'react-native';
// import { SafeAreaView } from 'react-native'
// import appNavigator from './routes/MainStack.js';
// import _appNavigator from './routes/TabNavigator';
// import { createAppContainer} from 'react-navigation';
// // import { HomeScreen, ProfileScreen, AddScreen} from './screens';
// import { MapView} from 'react-native-maps'
// export default class App extends Component {
//     render() {

//         return (
        
//             <MapView
//     initialRegion={{
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
//   />
        
//     )
//     }
// }
// // const appNavigator = createStackNavigator(
// //     {
// //         MainScreen: {screen: Screen, navigationOptions: {title: 'HomeScreen'}},
// //         Profile: ProfileScreen,
// //         AddScreen:AddScreen
// //     }
// // )

// // const AppContainer =  createAppContainer(appNavigator);
// // const _AppContainer = createAppContainer(_appNavigator)

//TODO: above code is required and below code is only for learning purpose

import React, {Component} from 'react';
import {Container, Content, Button, Text, Input,Item, Header, Title, Body, Icon, Form,Left, Right, Footer, FooterTab, Label } from 'native-base';
import { Dimensions, View, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import { addPlace} from '../src/actions/place';
class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   placeName : '',
    //   places: []
    // }

  }

  state = {
    placeName : '',
    places: []
  }
  buttonClickded = () => {
    Alert.alert(
      "Alert Title",
      "Alert Msg",
      [
        { text: "Later", onPress: () => console.log("later pressed") },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ''){
      return (Alert.alert('Error', 'Invalid input'))
    }
    this.props.add(this.state.placeName);
    console.log(this.state.placeName)
  }
  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    })
  }
  
  render(){
    const {height: screenHeight} = Dimensions.get('window');
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content>
      <View style={{flex:1, flexDirection: 'row', marginTop: 30, paddingLeft: 15, paddingRight: 15 }}>
        
       <Input 
        placeholder="Place name"
        getRef = {(input) => this.placeNameInput}
        returnKeyType="next"
        placeholderTextColor="#d3d3d3"
        style={{width: 60}} 
        autoCorrect={false} 
        keyboardType = "default"
        
        onChangeText = {this.placeNameChangeHandler}
        />
        
       <Button transparent small onPress={() => 
       {
         console.log(this.state.placeName)
         this.placeSubmitHandler
         }
       }
         ><Icon name="ios-search"/></Button>
       </View> 
      
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)