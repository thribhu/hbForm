import {_types} from '../actions/types'

const {GET_SALONS_SUCCESS, GET_SALONS_FAIL, GET_AREA_DETAILS, SELECTED_AREA} = _types

const INITIAL_STATE  = {
    data: {},
    error: '',
    areaData: {},
    selectedArea: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        
        case GET_SALONS_SUCCESS: 
            return {...state, data:action.payload, error: ''}

        case GET_SALONS_FAIL:
            return {...state, error: action.payload}
        case GET_AREA_DETAILS:
            return {...state, areaData: action.payload}
        case SELECTED_AREA:
            return {...state, selectedArea: action.payload}
        default: 
            return state
    }
}