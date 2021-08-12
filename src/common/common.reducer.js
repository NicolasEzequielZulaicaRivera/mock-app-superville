import {
    // [MODULE REDUCER] IMPORT ACTIONS
} from './common.actions';

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default commonReducer;
