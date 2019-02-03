import {_types} from '../actions/types';

const {
    SALON_CLASSES, 
    SALON_DATA_ADDED, 
    OP_CITIES, OP_AREA_BY_CITY_ID,  
    GET_BUSINESS_CATEGORY,
    GOT_SALON_AREA,
    GOT_SALON_CITY,
    GOT_SALON_CLASS,
    GOT_SALON_CATEGORY,
    SALON_ADD_FAIL,
    SALON_ADDED_SUCCESS,
    SALON_ADD_BUTTON_PRESSED
    
} = _types

const initial_state = {
    classes: {},
    selectedArea: '',
    selectedCity: '',
    selectedClass: '',
    selectedCategory: '',
    newSalon: {},
    category: {},
    cities: {},
    operatingAreas: {},
    isLoading: false,
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
        case GOT_SALON_AREA: 
            return {...state, selectedArea: action.payload}
        case GOT_SALON_CITY: 
            return {...state, selectedCity: action.payload}
        case GOT_SALON_CLASS:
            return {...state, selectedClass: action.payload}
        case SALON_ADD_BUTTON_PRESSED:
            return {...state, isLoading:true}
        case GOT_SALON_CATEGORY:
            return {...state, selectedCategory: action.payload}
        case SALON_ADD_FAIL: 
            return { ...state, salonAddError: action.payload}
        case SALON_ADDED_SUCCESS:
            return {...state, salonAddedSuccess: action.payload, isLoading: false, salonAddError: ''}
        default: 
            return state
    }
}