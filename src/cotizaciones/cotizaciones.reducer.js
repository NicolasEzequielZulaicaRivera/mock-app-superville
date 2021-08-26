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
  let cotActual
  let cotModificada
  
  switch (action.type) {
    case ADD_COTIZACION:
      const id = state.cotizaciones.length+1;
      cotizaciones = [ ...state.cotizaciones, {...action.cotizacion, id} ]
      return {...state, cotizaciones };
    case SET_COTIZACION_ACTUAL:

      if( (typeof action.payload) == "number"  )
        return {...state, cotizacionActual: action.payload}

      cotizaciones = [...state.cotizaciones];
      cotActual = nthElement( cotizaciones, state.cotizacionActual );
      cotModificada = {...cotActual, ...action.payload }

      cotizaciones[ cotizaciones.indexOf(cotActual) ] = cotModificada;

      return {...state, cotizaciones };

    case SET_PLAN:
      cotizaciones = [...state.cotizaciones];
      cotActual = nthElement( cotizaciones, state.cotizacionActual );
      cotModificada = {...cotActual, plan: action.plan }

      cotizaciones[ cotizaciones.indexOf(cotActual) ] = cotModificada;

      return {...state, cotizaciones };
    default:
      return state;
  }
};

export default cotizacionesReducer;