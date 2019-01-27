import {_types} from '../actions/types';
const {USER_LOCATION, GOOGLE_FETCH_ERROR, NEAR_SALONS_GOOGLE_DATA} = _types

const INTIAL_STATE = {
    googleSalons: '',
    error: '',
}
export default (state=INTIAL_STATE, action) => {
   // console.log(action);
    
    switch (action.type) {
        case USER_LOCATION:
            return {...state, lat: action.payload.lat, long: action.payload.long}
        case NEAR_SALONS_GOOGLE_DATA:
            return {...state, googleSalons: action.payload}
        case GOOGLE_FETCH_ERROR:
            return {...state, error:action.payload}
        default: 
            return {...state}
    }
}