import {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './common.actions';
import actions from '../redux/actions';

const commonMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default commonMiddleware;
