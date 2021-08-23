import { ADD_COTIZACION } from "./cotizacion.actions";

const initialState = {
  cotizacion: [
    {
      id: 1000,
      product: 'Tecnologia Protegida',
      fecha: '23/08/2021',
      document: 37345703,
      vigencia: '23/08/2021'
    }
  ]
};

const cotizacionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COTIZACION:
      return state;
    default:
      return state;
  }
};

export default cotizacionReducer;