import {_types} from './types';
const {USER_LOCATION, NEAR_SALONS_GOOGLE_DATA, GOOGLE_FETCH_ERROR} = _types
import api from '../api_info';
import _ from 'lodash';
export const userLocationUpdate = (position) =>{
    return {type: USER_LOCATION, payload: position }
}

// export const getSalonsFromGoogle = (lat, long) => {
//     return (dispatch) => { 
//       const url = api._getNearSalonFromGoogle(lat, long)
//       fetch(url)
//       .then((data) => data.json())
//       .then(jsonData => {
//         // console.log(jsonData.results)
//         console.log('i am running')
//         gotSalonFromGoogle(dispatch, jsonData.results)
//         }
//       )
//     }
// }
export const salons_google = (lat, long) => {
    return (dispatch) => {
        const url = api._getNearSalonFromGoogle(lat, long)
        console.log(url)
        fetch(url)
        .then((data) => data.json())
        .then((responseJson) => {
            
            const $data = responseJson.results
            
            
            const $salonData = _.map($data, (val) => {
                return {
                    geometry: val.geometry.location,
                    viewport: val.geometry.viewport,
                    name: val.name,
                    opening_hours: val.opening_hours,
                    photos: val.photos,
                    rating: val.rating,
                    user_ratings_total: val.user_ratings_total,
                    vicinity: val.vicinity
                }
            })
            
            gotSalonFromGoogle(dispatch, $salonData)
        })
    }
}
export const gotSalonFromGoogle = (dispatch, data) => {
    dispatch( {
        type: NEAR_SALONS_GOOGLE_DATA,
        payload: data
    })
}