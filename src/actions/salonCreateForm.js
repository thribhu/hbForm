import {_types} from './types';
import api from '../api_info';
const {
    SALON_CREATE,
    SALON_CLASSES,
    SALON_DATA_ADDED,
    OP_AREA_BY_CITY_ID, 
    OP_CITIES, 
    GET_BUSINESS_CATEGORY,
    GOT_SALON_AREA,
    GOT_SALON_CITY,
    GOT_SALON_CATEGORY,
    GOT_SALON_CLASS,
    NEW_SALON_SAVE,
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
} = _types;

export const getClasses = () => {
    return (dispatch) => {
        api.getClasses()
        .then(data => data.json())
        .then(jsonData => {
            return {type: SALON_CLASSES, payload: jsonData}
        })
    }
}

export const newSalonData = (data) => {
    console.log(data)
    return { type: SALON_DATA_ADDED, payload: data}
}

export const getClassData = () => {
    return (dispatch) => {
        api.getClasses()
        .then(data => data.json())
        .then(responseJson => {
            getClasssSuccess(dispatch, responseJson)
        })
    }
}
export const getClasssSuccess = (dispatch, data) => {
    dispatch({type: SALON_CLASSES, payload:data })
}
export const getCity = () => {
    return(dispatch) => {
        api.getCity()
        .then(data => data.json())
        .then(responseJson => {
            getCitySuccess(dispatch, responseJson)
        })
    }
}
export const getCitySuccess = (dispatch, data) => {
    dispatch({type: OP_CITIES, payload:data })
}
export const getAreaByCityId = (id) => {
    return (dispatch) => {
        api.getAreaByCityId(id)
        .then(data => data.json())
        .then(responseJson => {
            getAreaByIdSuccess(dispatch, responseJson)
        })
    }
}
export const getAreaByIdSuccess = (dispatch, data) => {
    dispatch({type: OP_AREA_BY_CITY_ID, payload:data })
}
export const getBusinessCategory = () => {
    return (dispatch) => {
        api.getCategory()
        .then(data => data.json())
        .then(responseJson => {
            getBusinessCategorySuccess(dispatch, responseJson)
        })
    }
} 
export const getBusinessCategorySuccess = (dispatch, data) => {
    dispatch({type: GET_BUSINESS_CATEGORY, payload:data })
}

export const selectSalonClass = (value) => {
    return {type: GOT_SALON_CLASS, payload: value}
}
export const selectSalonCity = (value) => {
    return {type: GOT_SALON_CITY, payload: value}
}
export const selectSalonCategory = (value) => {
    return {type: GOT_SALON_CATEGORY, payload: value}
}
export const selectSalonOperatingArea = (value) => {
    return {type: GOT_SALON_AREA, payload: value}
}
// BusinessName, Address, name, postalCode, description, phoneNumber, Email, Password, selectedCategory, selectedCity, selectedArea, no_of_chairs, popularity, selectedClass
 export const addingSalonToDb = (BusinessName, Address, Name, PostalCode, Note, PhoneNumber, Email, Password, BusinessType, CityId, AreaId, Noofchairs, Popularity, ClassId) => {
    return (dispatch) => {
        api.addNewSalon(BusinessName, Address, Name, PostalCode, Note, PhoneNumber, Email, Password, BusinessType, CityId, AreaId, Noofchairs, Popularity, ClassId)
        .then(res => res.json())
        .then(resJson => AddSuccess(dispatch,resJson))
        .catch(err => AddSalonFail(dispatch,err))
    }
 }
 export const AddSuccess = (dispatch, data) => {
     dispatch({type: SALON_ADDED_SUCCESS, payload: data})
 }
 export const AddSalonFail = (dispatch,data) => {
     dispatch({type: SALON_ADD_FAIL, payload: data})
 }
 export const addSalonButtonPress = () => {
     return {type: SALON_ADD_BUTTON_PRESSED}
 }

 // salon type 
 export const salonTypeSelected = (value) => {
     return {type: SALON_TYPE_SELECTED, payload: value}
 }

 //adding salon latitude and long
 export const addSalonLocation = () => {
     return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude;
                let long = position.coords.longitude
                let pos = {
                    lat: lat, long: long
                }
                locationDone(dispatch, pos)
            },
            (err) => {
                locationFail(dispatch)
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge:1000},
        )
     }
 }

 // location success or fail
 export const locationDone = (dispatch, data) => {
     dispatch({type: ADD_SALON_LOCATION, payload: data})
 }
 export const locationFail = (dispatch) => {
     dispatch({type: ADD_SALON_LOCATION_FAIL})
 }

 // AMENITIES 
 export const acChanges = () => {
    return {type: AC_CHANGED}
}
export const tvChanges = () => {
    return {type: TV_CHANGED}
}
export const musicChanged = () => {
    return {type: MUSIC_CHANGED}
}
export const wifiChanged = () => {
    return {type: WIFI_CHANGED}
}