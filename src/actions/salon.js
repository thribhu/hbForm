import {_types} from './types'
import { Actions } from 'react-native-router-flux';
import api from '../api_info';

const { GET_SALONS_FAIL, GET_SALONS_SUCCESS, GET_SALONS, GET_AREA_DETAILS, SELECTED_AREA} = _types


export const getAllSalons = () => {
    return(dispatch) => {
        const url = 'http://hogarbarber.plesk.europcheapflights.com/api/Salons/GetSalons'
        fetch(url)
        .then((data) => data.json())
        .then((responseJson) => {
            //console.log(responseJson);
            
            getSalonSuccess(dispatch, responseJson)
        })
        .catch((err) => {getSalonsFail(dispatch, err)})
    }
}

export const getSalonSuccess = (dispatch, data) => {
    dispatch( {type: GET_SALONS_SUCCESS, payload: data} )
    
}

export const getSalonsFail = (dispatch, err) => {
    dispatch({
        type: GET_SALONS_FAIL, 
        payload: err
    })
}

export const getAreaDetail = () => {
    return (dispatch) => {
        api.getAreaId()
        .then((data) => data.json())
        .then((jsonData) => {
            
            
            dispatch({
                type: GET_AREA_DETAILS,
                payload: jsonData
            })
        })
    }
}

export const areaSelected = (value) => {
    return {
        type: SELECTED_AREA,
        payload: value
    }
}