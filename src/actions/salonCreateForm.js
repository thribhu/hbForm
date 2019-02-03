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
    SALON_ADD_BUTTON_PRESSED
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