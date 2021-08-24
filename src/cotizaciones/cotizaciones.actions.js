export const ADD_COTIZACION = 'ADD_COTIZACION';

const cotizacionesActions = {
  addCotizacion: (cotizacion) => ({type: ADD_COTIZACION, cotizacion}),
};

export default cotizacionesActions;