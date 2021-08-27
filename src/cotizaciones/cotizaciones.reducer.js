import { nthElement } from "utils/utils";
import { ADD_COTIZACION, SET_COTIZACION_ACTUAL, SET_PLAN, MOD_COTIZACION_ACTUAL } from "./cotizaciones.actions";

const initialState = {
  cotizaciones: [],
  cotizacionActual: null,
};

const cotizacionesReducer = (state = initialState, action) => {

  if( state.cotizaciones === undefined ) state = { ...state, ...initialState } // FIXME

  let cotizaciones = []
  
  switch (action.type) {
    case ADD_COTIZACION:
      const id = state.cotizaciones.length+1;
      const nuevaCotizacion = {...action.cotizacion, id}
      return {...state, cotizaciones: [...state.cotizaciones, nuevaCotizacion], cotizacionActual: nuevaCotizacion };
    case SET_COTIZACION_ACTUAL:
      return {...state, cotizacionActual: action.cotizacion }
    case MOD_COTIZACION_ACTUAL:
      return {...state, cotizacionActual: {...state.cotizacionActual,...action.cotizacion} }
    case SET_PLAN:
      return {...state, cotizacionActual: {...state.cotizacionActual, plan: action.plan} };
    default:
      return state;
  }
};

export default cotizacionesReducer;