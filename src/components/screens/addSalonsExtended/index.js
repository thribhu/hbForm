import React, {Component} from 'react';
import { Container, props, Card, Picker, Form, CardItem, Button, Text, Right, Spinner, CheckBox, ListItem, Body} from 'native-base';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import {View, Alert} from 'react-native'
import {
  getCity, 
  getBusinessCategory, 
  getAreaByCityId, 
  getClasses,
  selectSalonOperatingArea,
  selectSalonCity,
  selectSalonClass,
  selectSalonCategory,
  addingSalonToDb,
  addSalonButtonPress,
  salonTypeSelected,
  addSalonLocation,
  acChanges, 
  tvChanges, 
  musicChanged, 
  wifiChanged,
} from '../../../actions/salonCreateForm'
import _ from 'lodash';
import SelectMultiple from 'react-native-select-multiple'
const amenities = [
    {
        label: 'Air Conditioned', value: 'AC'
    },
    {
        label: 'Television', value: 'TV'
    },
    {
        label: 'Wifi', value: 'wifi',
    },
    {
        label: 'Music', value: 'music'
    }
]
class AddSalonExtended extends Component {
   async componentWillMount() {
      await this.props.getCity()
      await this.props.getClasses()
      await this.props.getBusinessCategory()
      await console.log(this.props.category)
    }
    
    onButtonPress() {
        this.props.addSalonButtonPress()
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const API_URL = 'http://hogarbarber.plesk.europcheapflights.com/api/';
        const { BusinessName, Email, Password,  postalCode, no_Of_chairs, popularity, description, name, phoneNumber, Address } = this.props.newSalon
        const {selectedArea, selectedCategory, selectedCity, selectedClass} = this.props
        //let url = API_URL+`Salons/InsertSalons?BusinessName=${BusinessName}&Address=${Address}&Name=${name}&PostalCode=${postalCode}&MemberTypeId=0&Note=${description}&PhoneNumber=${phoneNumber}&Email=${Email}&Password=${Password}&BusinessType=${selectedCategory}&CityId=${selectedCity}&AreaId=${selectedArea}&CountryId=0&ManageYourBookings=0&ReasonForSigningUp=0&Website=""&GoogleMaps=""&Image=""&ImagePath=""&CreatedBy="8"&FrontendStatus=0&Noofchairs=${no_Of_chairs}&Popularity=${popularity}&ClassId=${selectedClass}`
        this.props.addingSalonToDb(BusinessName, Address, name, postalCode, description, phoneNumber, Email, Password, selectedCategory, selectedCity, selectedArea, no_Of_chairs, popularity, selectedClass)
        
        
    }
    // rendering salon type male, female
    $salonType = {
        male: "Male",
        female: "Female",
        unisex: 'Unisex',
        family: 'Family',
        kids: 'Kids'
    }
    alertFunction = () => {
        const {pos} = this.props;
        JsonPos = pos.json()
        Alert.alert(
        'Alert Title',
        JsonPos,
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
)}
    render() {
        if(this.props.isLoading) {
            return (
                <Spinner />
            )
        }
        {
      return (
        <Container>
          <Card transparent>
                <View>
                <CardItem>
            <View style={{flexDirection: 'row'}}>
                  <View style={{flex:1}}>
                    <Picker
                    placeholder = "Category"
                    placeholderStyle={{color: 'black'}}
                    mode="dropdown"
                    style={{ width: 120, borderWidth:1 }}
                    selectedValue= {this.props.selectedCategory}
                    onValueChange={(value) => this.props.selectSalonCategory(value)}
                    >
                    {
                        _.map(this.props.category, (val) => {
                            return (
                            <Picker.Item label={val.Category} value={val.CategoryId} />
                            )
                        })
                    }
                    </Picker>
                </View> 
                <View style={{flex:1}}>
                <Right>
                    <Picker
                    placeholder = "Class"
                    placeholderStyle={{color: 'black'}}
                    mode="dropdown"
                    style={{ width: 120, borderWidth:1 }}
                    onValueChange={value => this.props.selectSalonClass(value)}
                    selectedValue={this.props.selectedClass}
                    >
                    {
                        _.map(this.props.classes, (val) => {
                            return (
                            <Picker.Item label={val.ClassName} value={val.ClassId} />
                            )
                        })
                    }
                    </Picker>
                    </Right>
                </View> 
            </View>
            </CardItem>
            <CardItem>
                    <View style={{flexDirection: 'row'}}>
                            <View style={{flex:1}}>
                            <Picker
                            placeholder = "City"
                            placeholderStyle={{color: 'black'}}
                            mode="dropdown"
                            style={{ width: 120, borderWidth:1 }}
                            onValueChange={value => {
                                this.props.selectSalonCity(value)
                                this.props.getAreaByCityId(value)
                                }
                                }
                            selectedValue={this.props.selectedCity}
                            >
                            {
                                _.map(this.props.cities, (val) => {
                                    return (
                                    <Picker.Item label={val.CityName} value={val.CityId} />
                                    )
                                })
                            }
                            </Picker>
                        </View> 
                        <View style={{flex:1}}>
                        <Right>
                            <Picker
                            placeholder = "Area"
                            placeholderStyle={{color: 'black'}}
                            mode="dropdown"
                            style={{ width: 120, borderWidth:1 }}
                            selectedValue={this.props.selectedArea}
                            onValueChange={value => this.props.selectSalonOperatingArea(value)}
                            >
                            {
                                _.map(this.props.operatingAreas, (val) => {
                                    return (
                                    <Picker.Item label={val.AreaName} value={val.AreaId} />
                                    )
                                })
                            }
                            </Picker>
                            </Right>
                        </View> 
                    </View>
            </CardItem>
            <CardItem>
            <View style={{flex:1}}>
                    <Picker
                    placeholder = "Salon Type"
                    placeholderStyle={{color: 'black'}}
                    mode="dropdown"
                    style={{ width: 120, borderWidth:1 }}
                    selectedValue= {this.props.salonType}
                    onValueChange={(value) => this.props.salonTypeSelected(value)}
                    >
                    {
                        _.map(this.$salonType, (val) => {
                            console.log(1 + val)
                            return (
                            <Picker.Item label={val} value={val} />
                            )
                        })
                    }
                    </Picker>
                </View> 
            </CardItem>
            <CardItem>
                <View>
                    <Card>
                        <CardItem>
                            <Button transparent onPress={() => this.alertFunction()}>
                                <Text>
                                    Add Location
                                </Text>
                            </Button>
                        </CardItem>
                    </Card>
                </View>
            </CardItem>
            </View>

          </Card>
          <Card transparent>
                <CardItem header>
                    <Text style={{justifyContent: 'center'}}>
                        Amenities
                    </Text>
                </CardItem>
                <CardItem >
                <View style={{width: '100%'}}>
                    <ListItem button onPress={() => this.props.acChanges()}>
                            <CheckBox
                            checked={this.props.ac}
                            onPress={() => this.props.acChanges()}
                            />
                            <Body>
                            <Text>Air Conditioned</Text>
                            </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.props.tvChanges()}>
                        <CheckBox
                            color="red"
                            checked={this.props.tv}
                            onPress={() => this.props.tvChanges()}
                        />
                        <Body>
                            <Text>
                                Television
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.props.wifiChanged()}>
                            <CheckBox
                            color="green"
                            checked={this.props.wifi}
                            onPress={() => this.props.wifiChanged()}
                            />
                            <Body>
                            <Text>Wifi</Text>
                            </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.props.musicChanged()}>
                            <CheckBox
                            color="#000"
                            checked={this.props.music}
                            onPress={() => this.props.musicChanged()}
                            />
                            <Body>
                            <Text>Music</Text>
                            </Body>
                    </ListItem>
                </View>
                </CardItem>
            </Card>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button transparent onPress={this.onButtonPress.bind(this)}>
                <Text style={{flexDirection: 'row', justifyContent: 'center'}}>
                    Submit
                </Text>
                </Button>
            </View>
          </View>
        </Container>
      )
    }
    }
}

const mapStateToProps = (state) => {
  const { category, classes, cities, operatingAreas, newSalon,selectedArea, selectedCity, selectedClass, selectedCategory, isLoading, salonType, ac, tv, wifi, music, pos} = state.createSalon
  return { category, classes, cities, operatingAreas, newSalon,selectedArea, selectedCity, selectedClass, selectedCategory, isLoading, salonType, ac, tv, wifi, music, pos}
}

export default connect(mapStateToProps, {musicChanged, tvChanges, wifiChanged, acChanges,getCity, getAreaByCityId, getClasses, getBusinessCategory, selectSalonCategory, selectSalonCity, selectSalonClass, selectSalonOperatingArea, addingSalonToDb, addSalonButtonPress, salonTypeSelected, addSalonLocation})(AddSalonExtended);