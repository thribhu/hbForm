import { combineReducers} from 'redux'
import authReducer from './authReducer';
import salonsReducer from './salonsReducer';
import userLocation from './userLocationReducer';
import createSalon from './salonCreateReducer';

export default combineReducers({
    auth: authReducer,
    salons: salonsReducer,
    location: userLocation,
    createSalon: createSalon
})