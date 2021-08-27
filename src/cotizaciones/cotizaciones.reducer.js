import { nthElement } from "utils/utils";
import { ADD_COTIZACION, SET_COTIZACION_ACTUAL, SET_PLAN, MOD_COTIZACION_ACTUAL, SAVE_CURRENT_QUOTE } from "./cotizaciones.actions";

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
    case SAVE_CURRENT_QUOTE:
      const quoteToModify = state.cotizaciones.find( quote => quote.id === state.cotizacionActual.id )
      const positionToModify = state.cotizaciones.indexOf( quoteToModify )
      let newQuotes = [ ...state.cotizaciones ]
      newQuotes[ positionToModify ] = state.cotizacionActual
      return {...state, cotizaciones: newQuotes}
    default:
      return state;
  }
};

export default cotizacionesReducer;