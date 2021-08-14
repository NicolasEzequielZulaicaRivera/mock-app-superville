// [MODULE_ACTIONS] EXPORT ACTION
export const LOGIN = "login"
export const UNLOG = "unlog"

const mainActions = {
    login: payload => ({
        type: LOGIN,
        payload
    }),
    unlog: payload => ({
        type: UNLOG,
        payload
    }),
    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export default mainActions;