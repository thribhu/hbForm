import React, {Component} from 'react';
import {Container, Card, CardItem, Text, Input, Label, Item, Button, Footer, FooterTab, Picker, List, Radio, ListItem, Left, Right} from 'native-base';
import {Formik} from 'formik';
import {View, ScrollView, Alert} from 'react-native'
import {connect} from 'react-redux';
import { getAreaDetail} from '../../../actions/salon';
import _ from 'lodash';
import { newSalonData, getAreaByCityId, getClassData, getBusinessCategory, getCity } from '../../../actions/salonCreateForm'
import { Actions} from 'react-native-router-flux';
import * as yup from 'yup';
const formValues = {
    BusinessName: '',
    Email: '',
    Password: '',
    postalCode: '',
    no_Of_chairs: '',
    popularity: '',
    description: '',
    name: '',
    phoneNumber: '',
    Address: '',
    Website: '',
    SalonType: '',
    latitude: '',
    longitude: '',
    Amenities: ''
}
class AddSalon extends Component {
    async componentWillMount() {
        await this.props.getClassData()
        // await this.props.getAreaByCityId(13)
        await this.props.getBusinessCategory()
        await this.props.getCity()
    }
    
    componentDidMount () {
    }
    validationSchema = yup.object().shape({
        BusinessName: yup.string().required("Business Name is required"),
        Email: yup.string().email("Please enter a valid Email").required("Email is required field"),
        Password: yup.string().min(6, "Minimum 6 characters").required("Password is required field"),
        postalCode: yup.string().required("required field"),
        no_Of_chairs: yup.string().required("required field"),
        popularity: yup.string().required("required field"),
        description: yup.string(),
        name: yup.string().min(6, 'Name is too short').required("required field"),
        phoneNumber: yup.string().min(10, 'Enter a valid Number').max(10,'Enter a valid Number').required('Phone number is required'),
        Address: yup.string(),
        Website: yup.string(),
        SalonType: yup.string().required('required field'),
        latitude:yup.string().required('required field'),
        longitude:yup.string().required('required field'),
        Amenities: yup.array().of(yup.string().min(1, 'Please select minimum one option')).required('Select your amenities')
    })
    alertFunction = () => {
        Alert.alert(
  'Alert Title',
  'My Alert Msg',
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
);
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
                        handleReset
                        onSubmit={(values, { setSubmitting }) => {
                            this.props.newSalonData(values)
                            Actions.addSalonExtended()
                            }
                            }
                        validationSchema = {this.validationSchema}
                        >
                            {
                                formikProps => (
                                    <Card transparent>
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Owner Name</Label>
                                                <Input 
                                                    autoFocus={true}
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('name')}
                                                    onBlur= {() => formikProps.setFieldTouched('name')}
                                                    value={formikProps.values.name}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                            {formikProps.touched.name && formikProps.errors.name &&
                                                <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.name}</Text>
                                            }
                                        </CardItem>
                                       <CardItem>
                                            <Item floatingLabel>
                                                <Label>Business Name</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('BusinessName')}
                                                    onBlur= {() => formikProps.setFieldTouched('BusinessName')}
                                                    value={formikProps.values.BusinessName}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                {formikProps.touched.BusinessName && formikProps.errors.BusinessName &&
                                     <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.BusinessName}</Text>
                                }
                        </CardItem>
                                         <CardItem>
                                            <Item floatingLabel>
                                                <Label>Email</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                                                                      
                                                    onChangeText = {formikProps.handleChange('Email')}
                                                    onBlur= {() => formikProps.setFieldTouched('Email')}
                                                    value={formikProps.values.Email}
                                                    keyboardType="email-address"
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                {formikProps.touched.Email && formikProps.errors.Email &&
                                     <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.Email}</Text>
                                }
                        </CardItem> 
                        <CardItem>
                                {formikProps.touched.email && formikProps.errors.email &&
                                     <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.email}</Text>
                                }
                        </CardItem>
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Password</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('Password')}
                                                    onBlur= {() => formikProps.setFieldTouched('Password')}
                                                    value={formikProps.values.Password}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                {formikProps.touched.Password && formikProps.errors.Password &&
                                     <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.Password}</Text>
                                }
                        </CardItem>
                                        <CardItem>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex:1}}>
                                            <Item floatingLabel>
                                                <Label>Chairs</Label>
                                                <Input 
                                                    autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('no_Of_chairs')}
                                                    onBlur= {() => formikProps.setFieldTouched('no_Of_chairs')}
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
                                                    onBlur= {() => formikProps.setFieldTouched('popularity')}
                                                    value={formikProps.values.popularity}
                                                />
                                            </Item>
                                            </View>
                                        </View>
                                        </CardItem>
                                        <View>
                                        
                                        <CardItem>
                                            {formikProps.touched.no_Of_chairs && formikProps.errors.no_Of_chairs &&
                                                <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.no_Of_chairs}</Text>
                                            }
                                        </CardItem>
                                        
                                        <CardItem>
                                            {formikProps.touched.popularity && formikProps.errors.popularity &&
                                                <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.popularity}</Text>
                                            }
                                        </CardItem>
                                        
                                        </View>
                                        <CardItem>
                                            <View style={{flexDirection: 'row'}}>
                                            <View style={{flex:1}}>
                                                    <Item floatingLabel>
                                                        <Label>Phone</Label>
                                                        <Input 
                                                        autoCorrect = {false}                                                   
                                                            onChangeText = {formikProps.handleChange('phoneNumber')}
                                                            onBlur= {() => formikProps.setFieldTouched('PhoneNumber')}
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
                                                    onBlur= {() => formikProps.setFieldTouched('PostalCode')}
                                                    value={formikProps.values.postalCode}
                                                />
                                            </Item>
                                            </View>

                                            </View>
                                        </CardItem>
                                        <View>
                                        <Left>
                                        <CardItem>
                                            {formikProps.touched.phoneNumber && formikProps.errors.phoneNumber &&
                                                <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.phoneNumber}</Text>
                                            }
                                        </CardItem>
                                        </Left>
                                        <Right>
                                        <CardItem>
                                            {formikProps.touched.postalCode && formikProps.errors.postalCode &&
                                                <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.postalCode}</Text>
                                            }
                                        </CardItem>
                                        </Right>
                                        </View>
                                        
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Address</Label>
                                                <Input 
                                                   autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('Address')}
                                                    onBlur= {() => formikProps.setFieldTouched('Address')}
                                                    value={formikProps.values.Address}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                            {formikProps.touched.Address && formikProps.errors.Address &&
                                                <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.Address}</Text>
                                            }
                                        </CardItem>
                                        <CardItem>
                                            <Item floatingLabel>
                                                <Label>Description</Label>
                                                <Input 
                                                   autoCorrect = {false}                                                   
                                                    onChangeText = {formikProps.handleChange('description')}
                                                    onBlur= {() => formikProps.setFieldTouched('description')}
                                                    value={formikProps.values.description}
                                                />
                                            </Item>
                                        </CardItem>
                                        <CardItem>
                                            {formikProps.touched.description && formikProps.errors.description &&
                                                <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.description}</Text>
                                            }
                                        </CardItem>

                                        {/* // TODO:add lat long Website salon type */}
                                        <CardItem style ={{justifyContent: 'center'}}>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{justifyContent: 'space-around'}}>
                                                <Button 
                                                    transparent
                                                    onPress ={formikProps.handleSubmit}
                                                    disabled={!formikProps.isValid}
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
                                                    
                                                    // disabled={!formikProps.isValid}
                                                    onPress ={
                                                        Actions.addSalonExtended
                                                        }
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