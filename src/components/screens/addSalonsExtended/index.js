import React, {Component} from 'react';
import { Container, props, Card, Picker, Form, CardItem, Button, Text, Right, Spinner} from 'native-base';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import {View} from 'react-native'
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
  addSalonButtonPress
} from '../../../actions/salonCreateForm'
import _ from 'lodash'
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
                    placeholder = "Type"
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
            </View>
          </Card>
          <Right>
            <Button transparent onPress={this.onButtonPress.bind(this)}>
              <Text>
                Submit
              </Text>
            </Button>
          </Right>
        </Container>
      )
    }
    }
}

const mapStateToProps = (state) => {
  const { category, classes, cities, operatingAreas, newSalon,selectedArea, selectedCity, selectedClass, selectedCategory, isLoading} = state.createSalon
  return { category, classes, cities, operatingAreas, newSalon,selectedArea, selectedCity, selectedClass, selectedCategory, isLoading}
}

export default connect(mapStateToProps, {getCity, getAreaByCityId, getClasses, getBusinessCategory, selectSalonCategory, selectSalonCity, selectSalonClass, selectSalonOperatingArea, addingSalonToDb, addSalonButtonPress})(AddSalonExtended);