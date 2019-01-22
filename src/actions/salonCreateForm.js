import {_types} from './types';

const {SALON_CREATE} = _types;

export const createSalon = ({prop, vlue}) => {
    return {
        type: SALON_CREATE,
        payload: {prop, value}
    }
}
