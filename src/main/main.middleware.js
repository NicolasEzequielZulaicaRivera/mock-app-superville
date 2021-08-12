import mainActions, {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './main.actions';
import  {services} from './main.services'

const mainMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default mainMiddleware;