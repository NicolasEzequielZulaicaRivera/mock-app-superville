export const ADD_COTIZACION = 'ADD_COTIZACION';
export const SET_PLAN = 'SET_PLAN';
export const SET_COTIZACION_ACTUAL = "SET_COTIZACION_ACTUAL";

const cotizacionesActions = {
  addCotizacion: (cotizacion) => ({type: ADD_COTIZACION, cotizacion}),
  setCotizacionActual: (cotizacion) => ({type: SET_COTIZACION_ACTUAL, cotizacion}),
  setPlan: (plan) => ({type: SET_PLAN, plan})
};

export default cotizacionesActions;