import React, {Component} from 'react';
import { Container, Body, Text, Icon, Card, CardItem, Item, Label, Input, Button, Spinner} from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, buttonPress} from '../../../actions/authAction'
import {Formik} from 'formik'
class LoginScreen extends Component  {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }        
    render() {
        return(
            <Container>
                <Body style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Formik
                    intialValues={{email: '', password:''}}
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
                                    placeholder="email or Email"
                                    onChangeText = {formikProps.handleChange('email')}
                                    onBlur={formikProps.handleBlur('email')}
                                    value= {formikProps.values.email}
                                />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item fixedLabel>
                                <Label style={{color:'purple', fontSize: 14, fontWeight: '400'}}>Password</Label>
                                <Input  
                                    placeholder="password" 
                                    secureTextEntry
                                    onChangeText={formikProps.handleChange('password')}
                                    value = {formikProps.values.password}
                                    onBlur={formikProps.handleBlur('password')}
                                />
                            </Item>
                        </CardItem>
                        
                        <CardItem style ={{justifyContent: 'center'}}>
                        {formikProps.isSubmitting ? <Spinner /> : <Button onPress={formikProps.handleSubmit}><Text>Login</Text></Button>}
                        </CardItem>

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
    const {email, password, isLoading} = auth;
    return {email, password, isLoading}
}
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, buttonPress})(LoginScreen);