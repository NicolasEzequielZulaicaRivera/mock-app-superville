import { SET_COTIZACION_ACTUAL } from "emisiones/emisiones.actions";

export const ADD_COTIZACION = 'ADD_COTIZACION';
export const SET_PLAN = 'SET_PLAN';

const cotizacionesActions = {
  addCotizacion: (cotizacion) => ({type: ADD_COTIZACION, cotizacion}),
  setPlan: (plan) => ({type: SET_PLAN, plan})
};

export default cotizacionesActions;