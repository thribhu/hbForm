import React, { Component } from "react";
import { Container, Body, 
    Text,List, ListItem, Left, 
    Right, Card, CardItem, Title, 
    Button, Icon, Input, Picker,Item
} from 'native-base';
import { Image, FlatList, View } from 'react-native';
import {connect} from 'react-redux';
import {getAllSalons, getAreaDetail, areaSelected} from '../../../actions/salon';
import {userLocationUpdate, salons_google} from '../../../actions/userLocation';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import api from '../../../api_info'

class SalonHomeScreen extends Component {
    async componentWillMount() {
       await navigator.geolocation.getCurrentPosition(
           (position) => {
               let lat = position.coords.latitude;
               let long = position.coords.longitude;
               pos = {
                   lat: lat,long: long
               }
               this.props.userLocationUpdate(pos)
            //    this.props.salons_google(lat, long)
           },
           (err) => {
               return err
           },
           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
       )
       }
    async componentDidMount() {
        await this.props.getAllSalons()
        await this.props.getAreaDetail()
    }
    onButtonPress() {        
        Actions.salonList({salons: this.props.salonsData, area: this.props.onlyAreaName})
    }
    areaChanges(value) {
        this.areaSelected(value)
    }
    render()
     {
        
        return (
            <Container>
                <Card transparent>
                    <Text style= {{fontWeight: '600', color:'purple', fontSize: 24, paddingHorizontal: 15}}>
                        Hey Team, I am glad we are together.
                    </Text>
                    <CardItem>
                    <Text style={{margin: 20, fontSize:20, color:'green'}}>
                        Below are some things you need to focus.
                    </Text>
                    </CardItem>
                    <CardItem>
                    <Text style={{ paddingHorizontal: 10}}>
                       1.  We work to make the operations of our client better
                    </Text>
                    </CardItem>
                    <CardItem>
                    <Text style={{ paddingHorizontal: 10}}>
                       2.  Never make false promise. 
                    </Text>
                    </CardItem>
                    <CardItem>
                    <Text style={{ paddingHorizontal: 10}}>
                       3. Say what we do. Dont make any additional promises.
                    </Text>
                    </CardItem>
                    <CardItem>
                        <Button transparent onPress={this.onButtonPress.bind(this)}>
                            <Text>
                                Go Ahead!
                            </Text>
                        </Button>
                    </CardItem>
                </Card>
            
        
            </Container>
        )
    }
}

const mapStateToProps =(state) => {
    const {data, areaData, selectedArea} = state.salons;
    const {googleSalons}  = state.location
    const salonsData = _.map(data, (val, id) => {
        return {...val, id};
    })
    const onlyAreaName = _.map(areaData, (val) => {
        return {name: val.AreaName, id: val.AreaId}
    })
    
    
    return {salonsData, areaData, selectedArea, onlyAreaName, googleSalons}
}
export default connect(mapStateToProps, {getAllSalons, getAreaDetail, areaSelected, userLocationUpdate, salons_google})(SalonHomeScreen);