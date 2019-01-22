import React, { Component } from "react";
import { Container, Body, 
    Text,List, ListItem, Left, 
    Right, Card, CardItem, Title, 
    Button, Icon, Input, Picker,Item
} from 'native-base';

import { Image, FlatList, View } from 'react-native';
import {connect} from 'react-redux';
import {getAllSalons, getAreaDetail, areaSelected} from '../../../actions/salon';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import api from '../../../api_info'
class SalonHomeScreen extends Component {
    componentWillMount() {
        this.props.getAllSalons()
        this.props.getAreaDetail()
    }
    onButtonPress() {
        console.log('press');
        
        Actions.salonList({salons: this.props.salonsData})
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
        areas = this.props.onlyAreaName;
        return (
            <Container>
                <View style={{margin: 20}}>
                <Title style={{ color: 'purple', fontSize: 30, fontWeight: '300', paddingHorizontal: 20}}>Salons with us</Title>
                </View>
                <View>
                    <CardItem>
                    <Text>Select Area</Text>
                    <Picker
                        style={{borderColor: 'black', borderWidth: 1}}
                        onValueChange={(value) => this.props.areaSelected(value)}
                        iosHeader = 'Select Area'
                        mode = 'dropdown'
                        selectedValue= {this.props.selectedArea}
                        >
                        {_.map(areas, (area) => {
                            
                            return (
                                <Item label={area.name} value={area.id} />
                            )
                        })}

                    </Picker>
                    {/* <Picker
                        
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue='Cats'
                        >
                        <Item label="Cats" value="key0" />
                        <Item label="Dogs" value="key1" />
                        <Item label="Birds" value="key2" />
                        <Item label="Elephants" value="key3" />
                   </Picker> */}
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
                    {/* <Button transparent onPress={this.onButtonPress()}>
                        <Text>View All</Text>
                    </Button> */}
                    <Button transparent onPress={this.onButtonPress.bind(this)}><Text>View All</Text></Button>
              </View>
            </View>
        
            </Container>
        )
    }
}

const mapStateToProps =({salons}) => {
    const {data, areaData, selectedArea} = salons;
    
    // console.log(areaData)
    const salonsData = _.map(data, (val, id) => {
        return {...val, id};
    })
    const onlyAreaName = _.map(areaData, (val) => {
        return {name: val.AreaName, id: val.AreaId}
    })
    console.log(onlyAreaName);
    
    return {salonsData, areaData, selectedArea, onlyAreaName}
}
export default connect(mapStateToProps, {getAllSalons, getAreaDetail, areaSelected})(SalonHomeScreen);