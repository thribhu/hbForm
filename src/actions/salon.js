import {_types} from './types'
import {getSalons} from '../api'
import { Actions } from 'react-native-router-flux';
const { GET_SALONS_FAIL, GET_SALONS_SUCCESS, GET_SALONS} = _types


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