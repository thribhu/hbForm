import React, { Component } from 'react';
import { View, ActivityIndicator, ListView, Image, FlatList, ScrollView} from 'react-native';
import {Container, Content, Header, Title, Left, Right, Icon, Text, Body} from 'native-base';
import  api from '../api_info';
import { ListItem, List} from 'react-native-elements'
import {Button} from '../components'
import SalonList from '../components/salonListComp';
// import {Container, Header, Title, Content, Footer, FooterTab, Left, Right, Button, Body, Icon} from 'native-base';
import { MapView} from 'react-native-maps'

// const API_URL = 'http://hogarbarber.plesk.europcheapflights.com/api/';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            data: []
        }
    }
     async componentDidMount() {
        await api.getOnlyActiveSalons()
            .then((res) => res.json())
            .then((res) => {
                console.log('hi thribhuvan' ,res)
                this.setState({
                    isLoading: false,
                    data : res
                })
            })
            .catch(e => console.log(e)
            )
        // .then((res) => res.json())
        // .then((responseJson) => {
        //     let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        //     this.setState({
        //         isLoading: false,
        //         dataSource: ds.cloneWithRows(responseJson),
        //         salonDetails: responseJson,
        //     });

        //     console.log(this.state.salonDetails);
            
        // })
        // .catch((e) => console.log(e))
        await api.getAreaId()
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                areaList : res
            })
            console.log(this.state.areaList);
            
        })
        .catch(e => console.log(e)
        )
    }
    

    render(){
        if (this.state.isLoading) {
            return (
                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1, }}>
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
        let salons = this.state.salonDetails;
        return(
            
            <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
                    

            


        )
    }
}

export default HomeScreen;
