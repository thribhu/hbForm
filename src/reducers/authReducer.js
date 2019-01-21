import {EMAIL_CHANGED} from '../actions/types'
import {PASSWORD_CHANGED} from '../actions/types'
import {_types} from '../actions/types';
const { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL, BUTTON_PRESS} = _types;

const INTIAL_STATE = {
    email: '',
    password: '',
    isLoading: false,
    error: '',
    user: ''
}

export default (state=INTIAL_STATE, action) => {
    
    switch(action.type) {
        case 'EMAIL_CHANGED':
            return {... state, email: action.payload}
        case 'PASSWORD_CHANGED': 
            return {...state, password: action.payload}
        case BUTTON_PRESS:
            return {...state, isLoading: action.payload}
        case LOGIN_USER:
            return {...state, isLoading: true}
        case LOGIN_SUCCESS:
            return {...state, isLoading: false, user: action.payload }
        case LOGIN_FAIL: 
            return {...state, isLoading: false, error: action.payload}
        default: 
            return state
    }
}