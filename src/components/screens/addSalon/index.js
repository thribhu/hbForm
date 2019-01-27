import React, {Component} from 'react';
import {Container, Card, CardItem, Text, Input, Label, Item, Button, Footer, FooterTab, Picker} from 'native-base';
import {Formik} from 'formik';
import {View, ScrollView} from 'react-native'
import {connect} from 'react-redux';
import { getAreaDetail} from '../../../actions/salon';
import _ from 'lodash';
import { newSalonData, getAreaByCityId, getClassData, getBusinessCategory, getCity } from '../../../actions/salonCreateForm'
import { Actions} from 'react-native-router-flux';
const formValues = {
    BusinessName: '',
    Email: '',
    Password: '',
    city: '',
    postalCode: '',
    no_Of_chairs: '',
    popularity: '',
    description: '',
    businessType: '',
    name: '',
    class: '',
    area: '',
    phoneNumber: '',
    address: ''
}

class AddSalon extends Component {
    async componentWillMount() {
        await this.props.getClassData()
        await this.props.getAreaByCityId(13)
        await this.props.getBusinessCategory()
        await this.props.getCity()
    }
    
    componentDidMount () {
    }

    render() {
        return(
            <ScrollView>
                <View style={{ backgroundColor: 'white'}}>
                    <Text 
                    style={{fontSize: 25, color: 'purple', paddingHorizontal: 20, margin: 15,}}
                    >
                        Hey Team! Congrats for the new salon. 
                    </Text>
                    <View>
                        <Formik
                        initialValues={formValues}
                        onSubmit={(values, { setSubmitting }) => {
                            // console.log(values)

                            this.props.newSalonData(values)
                            Actions.addSalonExtended
                            }
                            }
                        >
                            {
                                formikProps => (
                                    <Card transparent>
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Owner Name</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('name')}
                                                    //onBlur={formikProps.handleBlur('name')}
                                                    value={formikProps.values.name}
                                                />
                                            </Item>
                                        </CardItem>
                                       <CardItem>
                                            <Item floatingLabel>
                                                <Label>Business Name</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('BusinessName')}
                                                    //onBlur={formikProps.handleBlur('name')}
                                                    value={formikProps.values.BusinessName}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Email</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                                                                      
                                                    onChangeText = {formikProps.handleChange('Email')}
                                                  //  onBlur={formikProps.handleBlur('email')}
                                                    value={formikProps.values.Email}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Password</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('Password')}
                                                  //  onBlur={formikProps.handleBlur('email')}
                                                    value={formikProps.values.Password}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex:1}}>
                                            <Item floatingLabel>
                                                <Label>Chairs</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('no_Of_chairs')}
                                                  //  onBlur={formikProps.handleBlur('email')}
                                                    value={formikProps.values.no_Of_chairs}
                                                />
                                            </Item>
                                            </View>
                                            <View style={{flex:1}}>
                                            <Item floatingLabel>
                                                <Label>Popularity</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                                                                      
                                                    onChangeText = {formikProps.handleChange('popularity')}
                                                  //  onBlur={formikProps.handleBlur('email')}
                                                    value={formikProps.values.popularity}
                                                />
                                            </Item>
                                            </View>
                                        </View>
                                        </CardItem>
                                        <CardItem>
                                            <View style={{flexDirection: 'row'}}>
                                            <View style={{flex:1}}>
                                                    <Item floatingLabel>
                                                        <Label>Phone</Label>
                                                        <Input 
                                                        autoCorrect = {false}                                                   
                                                            onChangeText = {formikProps.handleChange('phoneNumber')}
                                                        //  onBlur={formikProps.handleBlur('email')}
                                                            value={formikProps.values.phoneNumber}
                                                        />
                                                    </Item>
                                            </View>
                                            <View style={{flex:1}}>
                                            <Item floatingLabel>
                                                <Label>Postal Code</Label>
                                                <Input
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('postalCode')}
                                                  //  onBlur={formikProps.handleBlur('email')}
                                                    value={formikProps.values.postalCode}
                                                />
                                            </Item>
                                            </View>

                                            </View>
                                        </CardItem>
                                        
                                        
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Address</Label>
                                                <Input 
                                                   autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('address')}
                                                  //  onBlur={formikProps.handleBlur('email')}
                                                    value={formikProps.values.address}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Description</Label>
                                                <Input 
                                                   autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('description')}
                                                  //  onBlur={formikProps.handleBlur('email')}
                                                    value={formikProps.values.description}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem style ={{justifyContent: 'center'}}>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{justifyContent: 'space-around'}}>
                                                <Button 
                                                    transparent
                                                    onPress ={formikProps.handleSubmit}
                                                    success
                                                    >
                                                <Text>Save</Text>
                                                </Button>
                                            </View>
                                            <View style={{justifyContent: 'space-around'}}>
                                                <Button 
                                                    transparent
                                                    onPress ={formikProps.handleReset}
                                                    danger
                                                    >
                                                <Text>reset</Text>
                                                </Button>
                                            </View>
                                            <View style={{justifyContent: 'space-around'}}>
                                                <Button 
                                                    transparent
                                                    onPress ={Actions.addSalonExtended}
                                                    
                                                    >
                                                <Text>next</Text>
                                                </Button>
                                            </View>
                                        </View>
                                        </CardItem>
                                    </Card>
                                )
                            }

                        </Formik>
                    
                    </View>
                </View>
               
            </ScrollView>
        )
    }

}
const mapStateToProps =({salons, createSalon}) => {
    const {data, areaData, selectedArea} = salons;
    const { category, classes, cities, operatingAreas} = createSalon
    // console.log(areaData)
    const salonsData = _.map(data, (val, id) => {
        return {...val, id};
    })
    const onlyAreaName = _.map(areaData, (val) => {
        return {name: val.AreaName, id: val.AreaId}
    })
    
    
    return { areaData, onlyAreaName, category, classes, cities, operatingAreas}
}

export default connect(mapStateToProps, {newSalonData, getAreaByCityId, getClassData, getBusinessCategory, getCity})(AddSalon);