import {EMAIL_CHANGED} from '../actions/types'
import {PASSWORD_CHANGED} from '../actions/types'
import {_types} from '../actions/types';
const { LOGIN_USER, SHOW_PASSWORD,LOGIN_SUCCESS, LOGIN_FAIL, BUTTON_PRESS} = _types;

const INTIAL_STATE = {
    email: '',
    password: '',
    isLoading: false,
    error: false,
    user: '',
    showPassword: true,
    icon: 'eye-off'
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
            return {...state, isLoading: false, error: true, password: ''}
        case SHOW_PASSWORD:
            return {...state, showPassword: false, icon: 'eye'}
        default: 
            return state
    }
}