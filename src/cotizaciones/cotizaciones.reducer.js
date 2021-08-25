import { nthElement } from "utils/utils";
import { ADD_COTIZACION, SET_COTIZACION_ACTUAL, SET_PLAN } from "./cotizaciones.actions";

const initialState = {
  cotizaciones: [
    {
      id: 1,
      product: 'Tecnologia Protegida',
      date: '23/08/2021',
      numeroDocumento: 37345703,
      expiration: '23/08/2021',
    },
    {
      id: 2,
      product: 'Tecnologia Protegida',
      date: '23/08/2021',
      numeroDocumento: 37345703,
      expiration: '23/08/2021',
    },
    {
      id: 3,
      product: 'Tecnologia Protegida',
      date: '23/08/2021',
      numeroDocumento: 37345703,
      expiration: '23/08/2021',
    }
  ],
  cotizacionActual: -1,
};

const cotizacionesReducer = (state = initialState, action) => {

  if( state.cotizaciones === undefined ) state = { ...state, ...initialState } // FIXME

  let cotizaciones = []
  
  switch (action.type) {
    case ADD_COTIZACION:
      const id = state.cotizaciones.length+1;
      cotizaciones = [ ...state.cotizaciones, {...action.cotizacion, id} ]
      return {...state, cotizaciones };
    case SET_COTIZACION_ACTUAL:
      return {...state, cotizacionActual: action.payload}
    case SET_PLAN:
      cotizaciones = [...state.cotizaciones];
      const cotActual = nthElement( cotizaciones, state.cotizacionActual );
      const cotModificada = {...cotActual, plan: action.plan }

      cotizaciones[ cotizaciones.indexOf(cotActual) ] = cotModificada;

      console.log( cotizaciones );

      return {...state, cotizaciones };
    default:
      return state;
  }
};

export default cotizacionesReducer;