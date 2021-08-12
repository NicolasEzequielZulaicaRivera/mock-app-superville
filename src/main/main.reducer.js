import mainActions, {
    // [MODULE REDUCER] IMPORT ACTIONS
} from './main.actions';
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        // [MODULE REDUCER] SWITCH CASE

        default: return state;
    };
}

export default mainReducer;