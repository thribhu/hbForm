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
    SALON_ADD_BUTTON_PRESSED,
    SALON_TYPE_SELECTED,
    ADD_SALON_LOCATION,
    ADD_SALON_LOCATION_FAIL,
    AC_CHANGED,
    TV_CHANGED, 
    MUSIC_CHANGED,
    WIFI_CHANGED
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
    salonType: {},
    got_location_success: false,
    pos: {},
    locationError: false,
    ac: false,
    wifi: false,
    tv: false,
    music: false,
}

export default (state=initial_state, action) => {
    console.log(action)
    switch (action.type) {
        case AC_CHANGED:
            return {...state, ac: !state.ac}
        case TV_CHANGED:
            return {...state, tv: !state.tv}    
        case MUSIC_CHANGED:
            return {...state, music: !state.music}
        case WIFI_CHANGED:
            return {...state, wifi: !state.wifi}
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
        case SALON_TYPE_SELECTED:
            return {...state, salonType: action.payload}
        case ADD_SALON_LOCATION:
            return {...state, pos: action.payload, locationError: false, got_location_success: !state.got_location_success}
        case ADD_SALON_LOCATION_FAIL:
            return {...state, locationError: !state.locationError, got_location_success: !state.got_location_success}
        default: 
            return state
    }
}