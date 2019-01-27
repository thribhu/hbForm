import {_types} from '../actions/types';

const {SALON_CLASSES, SALON_DATA_ADDED, OP_CITIES, OP_AREA_BY_CITY_ID,  GET_BUSINESS_CATEGORY} = _types

const initial_state = {
    classes: {},
    selectedClass: '',
    newSalon: {},
    category: {},
    cities: {},
    operatingAreas: {}
}

export default (state=initial_state, action) => {
    console.log(action)
    switch (action.type) {
        case SALON_CLASSES:
            return {...state, classes: action.payload}
        case SALON_DATA_ADDED:
            return {...state, newSalon: action.payload}
        case GET_BUSINESS_CATEGORY:
            return {...state, category: action.payload}
        case OP_CITIES: 
            return {...state, cities: action.payload}
        case OP_AREA_BY_CITY_ID:
            return {...state, operatingAreas: action.payload}
        default: 
            return state
    }
}