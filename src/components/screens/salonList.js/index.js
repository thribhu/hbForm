import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Body, Text, List, ListItem, Header, Icon, Input, Item, Button} from 'native-base';
import { Image, FlatList, View } from 'react-native';

class salonList extends Component {
    componentWillMount() {
        console.log('happy')
        console.log( this.props.salons)
        
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
        return(
            <Container>
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
                    <View>
                        
                    </View>
                    <FlatList
                    data={this.props.salons}
                    
                    showsVerticalScrollIndicator={false}
                    style={{flexWrap: 'wrap'}}
                    renderItem={({item}) => 
                    this.renderSalons({item})
                    }
                    keyExtractor = {(item, id) => item.id}
                />
                {/* <FlatList
                    data={this.props.salons}
                    renderItem={({item}) => <Text>{item.BusinessName}</Text>}
                /> */}
                        
                    </View>
                
            </Container>
        )
    }
}

export default salonList;