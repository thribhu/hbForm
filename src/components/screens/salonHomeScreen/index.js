import React, { Component } from "react";
import { Container, Body, Text,List, ListItem, Left, Right, Card, CardItem, Title, Button, Icon} from 'native-base';
import { Image, FlatList, View } from 'react-native';
import {connect} from 'react-redux';
import {getAllSalons} from '../../../actions/salon';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
class SalonHomeScreen extends Component {
    componentWillMount() {
        console.log(this.props.user)
        this.props.getAllSalons()
        
    }
    onButtonPress() {
        console.log('press');
        
        Actions.salonList({salons: this.props.salonsData})
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
                <View style={{margin: 20}}>
                <Title style={{ color: 'purple', fontSize: 30, fontWeight: '300', paddingHorizontal: 20}}>Salons with us</Title>
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
                    keyExtractor = {(item, id) => item.id}
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
    const {data} = salons;
    const salonsData = _.map(data, (val, id) => {
        return {...val, id};
    })
    return {salonsData, data}
}
export default connect(mapStateToProps, {getAllSalons})(SalonHomeScreen);