export const ADD_COTIZACION = 'ADD_COTIZACION';

const cotizacionActions = {
  addCotizacion: (id) => ({type: ADD_COTIZACION, id}),
}

export default cotizacionActions;