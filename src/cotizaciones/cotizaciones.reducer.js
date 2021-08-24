import { ADD_COTIZACION } from "./cotizaciones.actions";

const initialState = [
  {
    id: 1,
    product: 'Tecnologia Protegida',
    date: '23/08/2021',
    document: 37345703,
    expiration: '23/08/2021'
  },
  {
    id: 2,
    product: 'Tecnologia Protegida',
    date: '23/08/2021',
    document: 37345703,
    expiration: '23/08/2021'
  },
  {
    id: 3,
    product: 'Tecnologia Protegida',
    date: '23/08/2021',
    document: 37345703,
    expiration: '23/08/2021'
  }
];

const cotizacionesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COTIZACION:
      const id = state.length + 1;
      return [...state, {...action.cotizacion, id}];
    default:
      return state;
  }
};

export default cotizacionesReducer;