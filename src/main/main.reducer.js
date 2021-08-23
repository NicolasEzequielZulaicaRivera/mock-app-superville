import mainActions, {
    LOGIN,UNLOG,GOTO,BACKTO,
} from './main.actions';
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
    stateIsSet: true,
    isLogged: false,
    pageHistory: [ { name: 'Inicio', url: "/" }, ],
    datosEmision: {},
};

const mainReducer = (state = initialState, action) => {

    if( state.pageHistory === undefined ) state = { ...initialState , ...state} // FIXME

    switch (action.type) {
        case LOGIN:
            return {...state, isLogged: true}
        break
        case UNLOG:
            return {...state, isLogged: false}
        break
        case GOTO:
            const pageHist = [...state.pageHistory, action.payload ]
            return {...state, pageHistory: pageHist }
        break
        case BACKTO:
            const cutPos = action.payload
            let cutHist = state.pageHistory.slice(0,cutPos)
            if(cutPos===0 || cutPos===1) cutHist =  initialState.pageHistory
            return {...state, pageHistory: cutHist }
        break

        default: return state;
    };
}

export default mainReducer;