// [MODULE_ACTIONS] EXPORT ACTION
export const LOGIN = "login"
export const UNLOG = "unlog"
export const GOTO = "goto"
export const BACKTO = "backto"
export const EDITAREMISION = "editarEmision"
export const CLEAR_SUMA_ASEGURAR = "CLEAR_SUMA_ASEGURAR"

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
    backto: payload => ({
        type: BACKTO,
        payload
    }),
    editarEmision: payload => ({
        type: EDITAREMISION,
        payload
    }),
    clearSumaAsegurar: () => ({type: CLEAR_SUMA_ASEGURAR})
    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export default mainActions;