import {_types} from './types';
const { LOGIN_USER, LOGIN_SUCCESS, SHOW_PASSWORD,LOGIN_FAIL, BUTTON_PRESS} = _types;
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'
export const emailChanged = (value) => {
        return {
            type: 'EMAIL_CHANGED',
            payload: value
        }
}
export const passwordChanged = (value) => {
        return {
            type: 'PASSWORD_CHANGED',
            payload: value
        }
}
export const showPassword = () =>{
    return {
        type: 'SHOW_PASSWORD'
        
    }
}
export const loginUser = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {loginSuccess(dispatch, user)})
        .catch((err) => {loginFail(dispatch, err)})
    }
}

export const buttonPress = () => {
    return {type: BUTTON_PRESS, payload: true}
}
export const  loginSuccess = (dispatch,user) => {
    dispatch({type: LOGIN_SUCCESS, payload: user})
    Actions.salonHome()
}

export const loginFail = (dispatch, error) => {
    dispatch({type: LOGIN_FAIL, payload: error})
}