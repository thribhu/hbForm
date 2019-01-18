import {GET_SALON} from './types';

export const getSalon = salonList => {
    return {
        type: GET_SALON,
        payload: salonList
    }
}
