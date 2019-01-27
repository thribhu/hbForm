import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Body, Text, List, ListItem, Header, Icon, Input, Item, Button, Right} from 'native-base';
import { Image, FlatList, View } from 'react-native';
import { Actions} from 'react-native-router-flux';
import api from '../../../api_info';
import _ from 'lodash'

class salonList extends Component {
//    async  componentWillMount() {
//        let _$data = {}
//      $data = await _.map(this.props.salons, (val) => { 
//             api.getAreaById(val.AreaId)
//             .then(data => data.json())
//             .then(jsonData => {
//                    _.map(jsonData, (i) => {
//                        _data = {areaName: i.AreaName}
//                         a = _.assign(val, _data)
//                         return _.assign(_$data, a)

//                    })
                   
//                    }
//                 )  
//             })
            
//            console.log(_$data) 
       
//         }
componentWillMount() {
    let data = {}
    _.map(this.props.salons, (val) => {
        _.assign(data, val)
    }) 
    console.log(data) 
}
    
    renderSalons({item}) {
        return (
            
                        <Card transparent>
                            <CardItem>
                                <Image source={{uri: item.ImagePath}} style={{ height: 150, width: '100%', borderRadius: 12 }}/>
                            </CardItem>
                            <CardItem>
                                <Text style={{fontWeight: '500', fontSize: 15, color: 'purple', paddingHorizontal: 10}}>{item.BusinessName.toUpperCase()}</Text>
                            </CardItem>
                            <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                            <CardItem>
                                <Text style={{fontWeight: '400', fontSize: 15, paddingHorizontal: 10}}>
                                Rating: <Text style={{fontWeight: '400', fontSize: 15, color: 'purple', paddingHorizontal: 10}}>{item.Rating}</Text>
                                </Text>
                            </CardItem>
                            </View>
                            <View style={{flex: 1}}>
                            <CardItem>
                                <Text style={{fontWeight: '400', fontSize: 15, paddingHorizontal: 10}}>
                                Popularity: <Text style={{fontWeight: '400', fontSize: 15, color: 'purple', paddingHorizontal: 10}}>{item.Popularity}</Text>
                                </Text>
                            </CardItem>
                            </View>
                            <View style={{flex: 1}}>
                            <CardItem>
                                <Text style={{fontWeight: '400', fontSize: 15, paddingHorizontal: 10}}>
                                Limit: <Text style={{fontWeight: '400', fontSize: 15, color: 'purple', paddingHorizontal: 10}}>{item.Limit}</Text>
                                </Text>
                            </CardItem>
                            </View>
                            </View>
                        </Card>    
                    
        )
    }
    
    render()
    {
        return(
        <View style={{backgroundColor: 'white'}}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Salons or Places" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
                    <View>
                    <Button transparent onPress={Actions.addSalon} style={{justifyContent: 'flex-end'}}>
                        <Text>
                            Add New Salon 
                        </Text>
                    </Button>
                    <View>
                        
                    </View>
                    <FlatList
                    style={{flex:1}}
                    data={this.props.salons}
                    showsVerticalScrollIndicator={false}
                    style={{flexWrap: 'wrap'}}
                    renderItem={({item}) => 
                    this.renderSalons({item})
                    }
                    keyExtractor = {(item, id) => item.id}
                />

                    </View>
                    </View>
        )
    }
}

export default salonList;