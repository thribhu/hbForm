import React, {Component} from 'react';
import { Container, Body, Text, Icon, Card, CardItem, Item, Label, Input, Button, Spinner} from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged,showPassword, loginUser, buttonPress} from '../../../actions/authAction'
import {Formik} from 'formik';
import * as yup from 'yup'; 
import { View} from 'react-native';
class LoginScreen extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true
        }
    }
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }    
    renderWrongPassword() {
        if(this.props.error) {
            return(
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                    <Card transparent>
                        <CardItem>
                            <Text style={{color: 'red', justifyContent: 'center'}}>Wrong Credentials.</Text>
                        </CardItem>
                    </Card>
                </View>
            )
        }
        else return;
    }    
    validationSchema = yup.object().shape({
        email: yup.string().email('Enter a valid email').required('Email is a required field'),
        password: yup.string().min(6, "You password should be minimum 6 characters").required("Password is required")
    })
    render() {
        return(
            <Container>
                <Body style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Formik
                    intialValues={{email: '', password:''}}
                    validationSchema={this.validationSchema}
                    onSubmit={(values, isSubmitting) => {
                        const {emailChanged, passwordChanged, loginUser} = this.props
                        const {email, password} = values
                        emailChanged(email)
                        passwordChanged(password)
                        loginUser(email, password)
                    
                    }}
                    >
                    {
                        formikProps => (
                    <Card transparent>
                        <CardItem>
                            <Item fixedLabel>
                                <Label style={{color:'purple', fontSize: 14, fontWeight: '400'}}>Email</Label>
                                <Input 
                                    placeholder="Email"
                                    autoFocus={true}
                                    autoCorrect={false}
                                    onChangeText = {formikProps.handleChange('email')}
                                    onBlur={formikProps.handleBlur('email')}
                                    value= {formikProps.values.email}
                                />
                            </Item>
                        </CardItem>
                        <CardItem>
                                {formikProps.touched.email && formikProps.errors.email &&
                                     <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.email}</Text>
                                }
                        </CardItem>
                        <CardItem>
                            <Item fixedLabel>
                                <Label style={{color:'purple', fontSize: 14, fontWeight: '400'}}>Password</Label>
                                <Input  
                                    placeholder="Password" 
                                    secureTextEntry={this.state.hidden}
                                    autoCorrect={false}
                                    onChangeText={formikProps.handleChange('password')}
                                    value = {formikProps.values.password}
                                    onBlur={formikProps.handleBlur('password')}
                                />
                                <Button transparent onPress={()=>{this.state.hidden = !this.state.hidden}}>
                                    <Icon name={this.props.icon}/>
                                </Button>
                            </Item>
                        </CardItem>
                        <CardItem>
                                 {formikProps.touched.password && formikProps.errors.password &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{formikProps.errors.password}</Text>
                                }
                                </CardItem>
                        
                        <CardItem style ={{justifyContent: 'center'}}>
                        {this.props.isLoading?  <Spinner /> : <Button onPress={formikProps.handleSubmit} disabled={!formikProps.isValid}><Text>Login</Text></Button>}
                        {/* {this.renderSpinnerOrButton(formikProps)} */}
                        </CardItem>
                        
                          {this.renderWrongPassword()}
                        

                    </Card>

                )
                    }
                    </Formik>
                </Body>
            </Container>
        )
    }
}

const styles = {
    color: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
}
const mapStateToProps = ({auth}) => {
    const {email, password, isLoading, error, showPassword, icon} = auth;
    console.log(showPassword)
    return {email, password, isLoading, error, showPassword, icon}
}
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, buttonPress, showPassword})(LoginScreen);