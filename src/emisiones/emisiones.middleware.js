import emisionesActions, {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './emisiones.actions';
import  {services} from './emisiones.services'

const emisionesMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default emisionesMiddleware;