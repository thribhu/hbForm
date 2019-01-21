import { combineReducers} from 'redux'
import authReducer from './authReducer';
import salonsReducer from './salonsReducer'

export default combineReducers({
    auth: authReducer,
    salons: salonsReducer
})