// [MODULE_ACTIONS] EXPORT ACTION
export const LOGIN = "login"
export const UNLOG = "unlog"
export const GOTO = "goto"

const mainActions = {
    login: payload => ({
        type: LOGIN,
        payload
    }),
    unlog: payload => ({
        type: UNLOG,
        payload
    }),
    goto: payload => ({
        type: GOTO,
        payload
    }),
    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export default mainActions;