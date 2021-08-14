import mainActions, {
    LOGIN,UNLOG,
} from './main.actions';
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
    isLogged: false,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, isLogged: true}
        break
        case UNLOG:
            return {...state, isLogged: false}
        break

        default: return state;
    };
}

export default mainReducer;