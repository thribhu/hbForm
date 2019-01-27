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
    async componentDidMount() {
       await navigator.geolocation.getCurrentPosition(
           (position) => {
               let lat = position.coords.latitude;
               let long = position.coords.longitude;
               pos = {
                   lat: lat,long: long
               }
               this.props.userLocationUpdate(pos)
               this.props.salons_google(lat, long)
               console.log('hello')
               console.log(this.props.googleSalons)
           },
           (err) => {
               return err
           },
           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
       )
     
       }
       
    
    componentWillMount() {
        this.props.getAllSalons()
        this.props.getAreaDetail()
    }
    onButtonPress() {        
        Actions.salonList({salons: this.props.salonsData, area: this.props.onlyAreaName})
    }
    areaChanges(value) {
        this.areaSelected(value)
    }
    renderSalons({item}) {
        return (
            
                        <Card>
                            <CardItem>
                                <Image source={{uri: item.ImagePath}} style={{ height: 80, width: 120 }}/>
                            </CardItem>
                            <CardItem>
                                <Text style={{fontWeight: '300', fontSize: 12, color: 'black', paddingHorizontal: 10}}>{item.BusinessName.toUpperCase()}</Text>
                            </CardItem>
                        </Card>    
                    
        )
    }
    render()
     {
        
        return (
            <Container>
                {/* <View style={{margin: 20}}>
                <Title style={{ color: 'purple', fontSize: 30, fontWeight: '300', paddingHorizontal: 20}}>Salons with us</Title>
                </View>
                <View>
                    <CardItem>
                    <Text style={{padding: 15}}>Select Area</Text>
                    <Picker
                        style={{borderColor: 'black', borderWidth: 1}}
                        onValueChange={(value) => this.props.areaSelected(value)}
                        iosHeader = 'Select Area'
                        mode = 'dropdown'
                        selectedValue= {this.props.selectedArea}
                        >
                        {_.map(areas, (area) => {
                            
                            return (
                                <Item 
                                label={area.name.charAt(0).toUpperCase() + area.name.slice(1)} 
                                value={area.id}
                                style={{
                                    fontWeight: '300',
                                    padding:20
                                    }}
                                transparent
                                 />
                            )
                        })}

                    </Picker>
                    <Right>
                    <Icon name='ios-navigate' />
                    </Right>
                    
                    </CardItem>
                    
                </View>
                <View>
                <View style={{borderWidth: 0.15, borderColor: '#d8d8d8'}}>
                <FlatList
                    data={this.props.salonsData}
                    horizontal= {true}
                    showsHorizontalScrollIndicator= {false}
                    style={{flexWrap: 'wrap'}}
                    renderItem={({item}) => 
                    this.renderSalons({item})
                    }
                    keyExtractor={(item, index) => item.key}
                />
                </View>
                <View style={{flexDirection:'row',justifyContent: 'flex-end', paddingTop: 10}}>
                     <Button transparent onPress={this.onButtonPress()}>
                        <Text>View All</Text>
                    </Button> 
                    <Button transparent onPress={this.onButtonPress.bind(this)}><Text>View All</Text></Button>
              </View>
            </View> */}
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