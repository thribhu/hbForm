import {_types} from '../actions/types'

const {GET_SALONS_SUCCESS, GET_SALONS_FAIL} = _types

const INITIAL_STATE  = {
    data: {},
    error: ''
}

export default (state=INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        
        case GET_SALONS_SUCCESS: 
            return {...state, data:action.payload, error: ''}

        case GET_SALONS_FAIL:
            return {...state, error: action.payload}
        default: 
            return state
    }
}