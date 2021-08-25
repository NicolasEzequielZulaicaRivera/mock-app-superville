import { SET_COTIZACION_ACTUAL } from './emisiones.actions';

const initialState = {
    cotizacionActual: -1
};

const emisionesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COTIZACION_ACTUAL:
            return {...state, cotizacionActual: action.payload}
        default: return state;
    };
}

export default emisionesReducer;