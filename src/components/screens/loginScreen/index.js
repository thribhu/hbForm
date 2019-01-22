import React, {Component} from 'react';
import { Container, Body, Text, Icon, Card, CardItem, Item, Label, Input, Button, Spinner} from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, buttonPress} from '../../../actions/authAction'

class LoginScreen extends Component  {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
renderButtonOrSpinner() {
    if(this.props.isLoading) {
        return (
            <Spinner />
        )
    }
    return (
             
        <Button transparent onPress={() => {
            const {email, password} = this.props
            this.props.buttonPress()
            this.props.loginUser({email, password})
        }}>
            <Text style={styles.buttonText}>Login</Text>
        </Button>
    )
}
        
    render() {
        return(
            <Container>
                <Body style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Card transparent>
                        <CardItem>
                            <Item fixedLabel>
                                <Label>Email</Label>
                                <Input 
                                    placeholder="Username or Email"
                                    onChangeText={this.onEmailChange.bind(this)}
                                    value= {this.props.email}
                                />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item fixedLabel>
                                <Label>Password</Label>
                                <Input  
                                    placeholder="password" 
                                    secureTextEntry
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    value = {this.props.password}
                                />
                            </Item>
                        </CardItem>
                        
                        <CardItem style ={{justifyContent: 'center'}}>
                        {this.renderButtonOrSpinner()}   
                        </CardItem>
                    </Card>
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

// import React, {Component} from 'react'
// import {Input, Container, Body, Button, Text, Card, CardItem} from 'native-base';
// import { Formik } from 'formik';


// class LoginScreen extends Component {
//     _intialValues= {
//         email: 'thribhuvan',
//         pass: ''
//     }
//     render() {
//         return(
//             <Formik
//                 initialValues ={this._intialValues}
//                 onSubmit = {values => console.log(values.pass)}
//                 >
//                 {
//                     formikProps => (
//                         <Card>
//                             <CardItem>
//                             <Input 
//                                     placeholder='email@example.com'
//                                     onChangeText={formikProps.handleChange('email')}
//                                     onBlur= {formikProps.handleBlur('email')}
//                                     value= {formikProps.values.email}
//                                 />
//                             </CardItem> 
//                             <CardItem>
//                             <Input 
//                                  placeholder='password'
//                                  secureTextEntry
//                                  onChangeText = {formikProps.handleChange('pass')}
//                                  onBlur={formikProps.handleBlur('pass')}
//                                  value={formikProps.values.pass}
//                                  />
//                             </CardItem>
//                             <CardItem>
//                             <Button 
//                                  transparent
//                                  onPress={formikProps.handleSubmit}
//                                  >
//                                      <Text>Submit</Text>
//                                  </Button>
//                             </CardItem> 
//                         </Card>
//                     )
//                 }

//             </Formik>
//         )
//     }
// }
// export default LoginScreen;