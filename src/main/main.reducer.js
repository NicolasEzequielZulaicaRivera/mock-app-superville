import mainActions, {
    LOGIN,
    UNLOG,
    GOTO,
    BACKTO,
    EDITAREMISION,
    CLEAR_SUMA_ASEGURAR,
} from './main.actions';
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
    stateIsSet: true,
    isLogged: false,
    pageHistory: [ { name: 'Inicio', url: "/" }, ],
    datosEmision: {
        sumaAsegurar: 0,
    },
};

const mainReducer = (state = initialState, action) => {

    if( state.pageHistory === undefined ) state = { ...initialState , ...state} // FIXME

    switch (action.type) {
        case LOGIN:
            return {...state, isLogged: true}
        case UNLOG:
            return {...state, isLogged: false}
        case GOTO:
            const pageHist = [...state.pageHistory, action.payload ]
            return {...state, pageHistory: pageHist }
        case BACKTO:
            const cutPos = action.payload
            let cutHist = state.pageHistory.slice(0,cutPos)
            if(cutPos===0 || cutPos===1) cutHist =  initialState.pageHistory
            return {...state, pageHistory: cutHist }
        case EDITAREMISION:
            const datosEmision ={ ...state.datosEmision, ...action.payload }
            return {...state, datosEmision }
        case CLEAR_SUMA_ASEGURAR:
            return {...state, datosEmision: initialState.datosEmision };
        default: return state;
    };
}

export default mainReducer;