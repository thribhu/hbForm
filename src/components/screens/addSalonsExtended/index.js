import React, {Component} from 'react';
import { Container, props, Card, Picker, Form, CardItem} from 'native-base';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import {View} from 'react-native'
import {getCity, getBusinessCategory, getAreaByCityId, getClasses} from '../../../actions/salonCreateForm'
import _ from 'lodash'
import {Formik} from 'formik';

intialValues = {
  area: '',
  businessType: '',
  city: '',
  class: ''
}
class AddSalonExtended extends Component {
   async componentWillMount() {
      await this.props.getCity()
      await this.props.getClasses()
      await this.props.getBusinessCategory()
      await console.log(this.props.category)
    }
    render() {
      return (
        <Container>
          <Card transparent>
          {/* <CardItem>
          <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
          <Picker
              placeholder = "Business Class"
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            {
              _.map(this.props.classes, (val) => {
                return (
                  <Picker.Item label={val.ClassName} value={val.ClassId} />
                )
              })
            }
              
            </Picker>
          </View>
            <View style={{flex: 1}}>
            <Picker
              placeholder = "Select Category"
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
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
            </View>
            </CardItem>
          <CardItem>
            <Picker
              placeholder = "Select Category"
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            {
              _.map(this.props.category, (val) => {
                return (
                  <Picker.Item label={val.Category} value={val.CategoryId} />
                )
              })
            }
              
            </Picker>
            </CardItem>
            <CardItem>
            <Picker
              placeholder = "City"
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            {
              _.map(this.props.cities, (val) => {
                return (
                  <Picker.Item label={val.CityName} value={val.CityId} />
                )
              })
            }
              
            </Picker>
            </CardItem>
            <CardItem>
            <Picker
              placeholder = "Select Area"
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            {
              _.map(this.props.operatingAreas, (val) => {
                return (
                  <Picker.Item label={val.AreaName} value={val.AreaId} />
                )
              })
            }
              
            </Picker>
            </CardItem> */}
            <Formik
            intialValues = {intialValues}
            onSubmit={val => console.log(val)}
            >
            {
              formikProps => (
                <View>
                <CardItem>
            <View style={{flexDirection: 'row'}}>
                  <View style={{flex:1}}>
                    <Picker
                    placeholder = "Type"
                    placeholderStyle={{color: 'black'}}
                    mode="dropdown"
                    style={{ width: 120 }}
                    value= {formikProps.values.businessType}
                    
                    onValueChange={formikProps.handleChange('businessType')}
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
                    <Picker
                    placeholder = "Class"
                    placeholderStyle={{color: 'black'}}
                    mode="dropdown"
                    style={{ width: 120 }}
                    selectedValue={formikProps.values.classes}
                    onValueChange={formikProps.handleChange('classes')}
                    >
                    {
                        _.map(this.props.classes, (val) => {
                            return (
                            <Picker.Item label={val.ClassName} value={val.ClassId} />
                            )
                        })
                    }
                    </Picker>
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
                            style={{ width: 120 }}
                            selectedValue={formikProps.values.city}
                            onValueChange={formikProps.handleChange('city')}
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
                            <Picker
                            placeholder = "Area"
                            placeholderStyle={{color: 'black'}}
                            mode="dropdown"
                            style={{ width: 120 }}
                            selectedValue={formikProps.values.area}
                            onValueChange={formikProps.handleChange('area')}
                            >
                            {
                                _.map(this.props.operatingAreas, (val) => {
                                    return (
                                    <Picker.Item label={val.AreaName} value={val.AreaId} />
                                    )
                                })
                            }
                            </Picker>
                        </View> 
                                                </View>
                                        </CardItem>
                                        </View>
              )
            }
            </Formik>
          </Card>
        </Container>
      )
    };
}

const mapStateToProps = (state) => {
  const { category, classes, cities, operatingAreas} = state.createSalon
  return { category, classes, cities, operatingAreas}
}

export default connect(mapStateToProps, {getCity, getAreaByCityId, getClasses, getBusinessCategory})(AddSalonExtended);