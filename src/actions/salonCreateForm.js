import {_types} from './types';
import api from '../api_info';
const {SALON_CREATE, SALON_CLASSES, SALON_DATA_ADDED, OP_AREA_BY_CITY_ID, OP_CITIES, GET_BUSINESS_CATEGORY} = _types;

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
// TODO:add the below methods to reducers
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