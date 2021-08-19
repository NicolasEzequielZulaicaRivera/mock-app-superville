import mainActions, {
    LOGIN,UNLOG,GOTO
} from './main.actions';
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
    isLogged: false,
    pageHistory: [ { name: 'Inicio', url: "/" }, ]
};

const mainReducer = (state = initialState, action) => {

    if( state.pageHistory === undefined )
        state = {...state, initialState} // FIXME

    switch (action.type) {
        case LOGIN:
            return {...state, isLogged: true}
        break
        case UNLOG:
            return {...state, isLogged: false}
        break
        case GOTO:
            console.log("GOTO -------------------------------- GOTO")
            const pageHist = [...state.pageHistory, action.payload ]
            return {...state, pageHistory: pageHist }
        break

        default: return state;
    };
}

export default mainReducer;